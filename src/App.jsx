import React, { useMemo, useState, useEffect } from 'react'
import { Sparkles, Info } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import AxisCard from './components/AxisCard.jsx'
import TopPrompt from './components/TopPrompt.jsx'
import RightNav from './components/RightNav.jsx'
import ThemePicker from './components/ThemePicker.jsx'
import { BROADER_GROUPS, AXES, TEMPLATE_SLOTS, PROFILE_DEFAULT } from './data/sampleData.js'
import { buildPrompt } from './lib/promptBuilder.js'
import { searchFilter } from './lib/search.js'
import { loadState, saveState, pushHistory } from './lib/persist.js'

export default function App() {
    const [groupFilter, setGroupFilter] = useState(() => new Set())
    const [mode, setMode] = useState('all')
    const [query, setQuery] = useState('')

    const [selection, setSelection] = useState(() => loadState() || { gradable: {}, modifiers: {}, nonGradable: {} })
    const [liveSelection, setLiveSelection] = useState(null) // For live prompt updates during slider drag
    useEffect(() => { saveState(selection) }, [selection])

    const activeSelection = liveSelection || selection

    const axesFiltered = useMemo(() => {
        // 1. Group filter: if empty, show all.
        let base = (groupFilter.size > 0)
            ? AXES.filter(a => groupFilter.has(a.broaderGroupId))
            : AXES

        // 2. Mode filter
        if (mode === 'gradable') base = base.filter(a => a.kind === 'gradable')
        if (mode === 'non') base = base.filter(a => a.kind === 'nonGradable')

        // 3. Sort: gradable (sliders) first, then by displayOrder
        base = base.sort((a,b) => {
            if (a.kind !== b.kind) {
                return a.kind === 'gradable' ? -1 : 1
            }
            return (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
        })

        // 4. Search filter (now simplified)
        return query ? base.filter(a => searchFilter(a, query)) : base
    }, [groupFilter, mode, query])

    const prompt = useMemo(() => buildPrompt(activeSelection, PROFILE_DEFAULT, TEMPLATE_SLOTS, AXES), [activeSelection])
    useEffect(() => {
        // Only push to history when a selection is committed, not during live drag
        if (!liveSelection && prompt?.trim()) {
            pushHistory(prompt.trim())
        }
    }, [prompt, liveSelection])

    // Selections now use the term's unique id string as the identifier
    const selectGradable = (axisId, termId) => setSelection(s => ({ ...s, gradable: { ...s.gradable, [axisId]: termId } }))
    const clearGradable = (axisId) => {
        setLiveSelection(null) // Also clear the live selection state
        setSelection(s => {
            const next = { ...s.gradable }; delete next[axisId]
            const m = { ...s.modifiers }; delete m[axisId]
            return { ...s, gradable: next, modifiers: m }
        })
    }
    const changeGradable = (axisId, termId) => {
        selectGradable(axisId, termId)
        setLiveSelection(null)
    }
    const dragGradable = (axisId, termId) => {
        setLiveSelection({
            ...selection,
            gradable: { ...selection.gradable, [axisId]: termId },
        })
    }
    const toggleNonGradable = (axisId, termId) => setSelection(s => {
        const existing = new Set(s.nonGradable[axisId] || [])
        existing.has(termId) ? existing.delete(termId) : existing.add(termId)
        return { ...s, nonGradable: { ...s.nonGradable, [axisId]: Array.from(existing) } }
    })
    const clearAll = () => setSelection({ gradable: {}, modifiers: {}, nonGradable: {} })

    const loadSelection = (selectionToLoad) => {
        if (selectionToLoad) {
            setSelection(selectionToLoad);
        }
    };

    const groupedAxes = useMemo(() => {
        const groups = (groupFilter.size === 0) ? BROADER_GROUPS : BROADER_GROUPS.filter(g => groupFilter.has(g.id))
        return groups.map(g => ({ group: g, axes: axesFiltered.filter(a => a.broaderGroupId === g.id) }))
            .filter(g => g.axes.length > 0)
    }, [axesFiltered, groupFilter])

    return (
        <div className="min-h-screen">
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-slate-900 dark:text-slate-100" />
                    <h1 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Prompter Palette</h1>
                    <span className="ml-auto text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                        <Info className="w-4 h-4" /> Demo data
                    </span>
                    <div className="ml-3">
                        <ThemePicker />
                    </div>
                </div>
            </header>

            <TopPrompt prompt={prompt} onClearAll={clearAll} />

            <div className="side-rail side-left hidden xl:block">
                <Sidebar
                    groups={BROADER_GROUPS}
                    groupFilter={groupFilter}
                    setGroupFilter={setGroupFilter}
                    mode={mode}
                    setMode={setMode}
                    query={query}
                    setQuery={setQuery}
                    clearAll={clearAll}
                />
            </div>
            <div className="side-rail side-right hidden xl:block">
                <RightNav
                    selection={selection}
                    prompt={prompt}
                    onLoadSaved={loadSelection}
                />
            </div>

            <main className="mx-auto max-w-6xl px-4 mt-8 mb-8 text-slate-900 dark:text-slate-100">
                <section className="space-y-6">
                    {groupedAxes.map(({ group, axes }) => (
                        <div key={group.id}>
                            <div className="group-head mb-2">
                                <span className="dot bg-slate-600 dark:bg-slate-400"></span>
                                <span>{group.name}</span>
                            </div>
                            <div className="group-wrap">
                                {axes.map(axis => (
                                    <AxisCard
                                        key={axis.id}
                                        axis={axis}
                                        selection={activeSelection}
                                        onClearGradable={clearGradable}
                                        onChangeGradable={changeGradable}
                                        onDragGradable={dragGradable}
                                        onToggleNonGradable={toggleNonGradable}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                    {groupedAxes.length === 0 && (
                        <div className="card p-6 text-slate-700 dark:text-slate-300 text-sm">No axes match the current filters.</div>
                    )}
                </section>
            </main>
        </div>
    )
}
