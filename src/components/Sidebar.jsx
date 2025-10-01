import React from 'react'
import { Filter, RefreshCw } from 'lucide-react'

// Simple hash to get a deterministic color from a palette for a given string ID
const colorPalette = [
    { bg: 'bg-red-200', text: 'text-red-800' },
    { bg: 'bg-orange-200', text: 'text-orange-800' },
    { bg: 'bg-amber-200', text: 'text-amber-800' },
    { bg: 'bg-yellow-200', text: 'text-yellow-800' },
    { bg: 'bg-lime-200', text: 'text-lime-800' },
    { bg: 'bg-green-200', text: 'text-green-800' },
    { bg: 'bg-emerald-200', text: 'text-emerald-800' },
    { bg: 'bg-teal-200', text: 'text-teal-800' },
    { bg: 'bg-cyan-200', text: 'text-cyan-800' },
    { bg: 'bg-sky-200', text: 'text-sky-800' },
    { bg: 'bg-blue-200', text: 'text-blue-800' },
    { bg: 'bg-indigo-200', text: 'text-indigo-800' },
    { bg: 'bg-violet-200', text: 'text-violet-800' },
    { bg: 'bg-purple-200', text: 'text-purple-800' },
    { bg: 'bg-fuchsia-200', text: 'text-fuchsia-800' },
    { bg: 'bg-pink-200', text: 'text-pink-800' },
    { bg: 'bg-rose-200', text: 'text-rose-800' },
]
const getColorForId = (id) => {
    let hash = 0
    for (let i = 0; i < id.length; i++) {
        const char = id.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash // Convert to 32bit integer
    }
    const index = Math.abs(hash) % colorPalette.length
    return colorPalette[index]
}


export default function Sidebar({
                                    groups, groupFilter, setGroupFilter,
                                    mode, setMode,
                                    query, setQuery,
                                    clearAll
                                }) {
    const handleGroupClick = (id) => {
        const isCurrentlySelected = groupFilter.has(id);
        if (isCurrentlySelected) {
            // User clicked the selected group again, so clear the filter.
            setGroupFilter(new Set());
        } else {
            // User clicked a new group, so select only that one.
            setGroupFilter(new Set([id]));
        }
    }

    return (
        <div className="card p-4 space-y-3">
            <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-700" />
                <h2 className="text-sm font-semibold text-slate-800">Filters</h2>
            </div>

            <input
                placeholder="Search axes or terms..."
                className="input"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            <div className="segmented" role="group" aria-label="Mode">
                <button aria-pressed={mode==='all'} onClick={() => setMode('all')}>All</button>
                <button aria-pressed={mode==='gradable'} onClick={() => setMode('gradable')}>Gradable only</button>
                <button aria-pressed={mode==='non'} onClick={() => setMode('non')}>Non-gradable only</button>
            </div>

            <div>
                <div className="text-xs font-medium text-slate-500 mb-2">Groups</div>
                <div className="flex flex-col gap-1.5">
                    {groups.map(g => {
                        const active = groupFilter.has(g.id)
                        const color = getColorForId(g.id)
                        return (
                            <button
                                key={g.id}
                                className={`btn ${active ? 'btn-light' : 'btn-ghost'} !justify-start`}
                                onClick={() => handleGroupClick(g.id)}
                                title={g.name}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full mr-2 ${color.bg}`}></span>
                                <span className="flex-1 text-left">{g.name}</span>
                                {active && <span className="text-slate-500 text-xs">✓</span>}
                            </button>
                        )
                    })}
                </div>
            </div>

            <hr />

            <button className="btn btn-ghost w-full" onClick={clearAll}>
                <RefreshCw className="w-4 h-4 mr-2" /> Clear all selections
            </button>
        </div>
    )
}

