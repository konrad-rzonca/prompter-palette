import React from 'react'
import cn from 'classnames'
import { Gauge, Tag, X } from 'lucide-react'
import DiscreteSlider from './DiscreteSlider.jsx'

export default function AxisCard({
                                     axis, selection, chains, terms, labels,
                                     onSelectGradable, onClearGradable, onChangeGradable, onDragGradable,
                                     onToggleNonGradable
                                 }) {
    const isGrad = axis.kind === 'gradable'
    const Icon = isGrad ? Gauge : Tag

    // Gradable data
    const chain = chains.find(c => c.axisId === axis.id)
    const chainCount = isGrad ? (chain?.termIds?.length || 0) : 0
    const valueIndex = isGrad && chain && selection.gradable[axis.id]
        ? chain.termIds.findIndex(id => id === selection.gradable[axis.id])
        : -1
    const hasGradSelection = isGrad && valueIndex >= 0

    // Determine the label of the selected point
    const selectedLabel = hasGradSelection ? labels[valueIndex] : ''

    // Non-gradable data
    const nonTerms = !isGrad ? terms.filter(t => t.axisId === axis.id) : []
    const selectedNon = new Set(selection.nonGradable[axis.id] || [])

    return (
        <div className="card p-3">
            <div className="axis-head">
                <span className={`dot ${isGrad ? 'dot-grad' : 'dot-non'}`} />
                <Icon className="w-4 h-4 text-slate-600" />
                <div className="axis-title">{axis.name}</div>
                {isGrad && (
                    <button
                        className={cn('btn btn-ghost !p-1 ml-auto', {
                            'invisible': !hasGradSelection
                        })}
                        disabled={!hasGradSelection}
                        onClick={() => onClearGradable(axis.id)}
                        title="Clear selection"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>

            <div className="axis-body">
                {isGrad ? (
                    <DiscreteSlider
                        count={chainCount || 2}
                        valueIndex={hasGradSelection ? valueIndex : null}
                        labels={labels}
                        selectedLabel={selectedLabel}
                        onChange={(i) => {
                            if (!chain) return
                            const id = chain.termIds[i]
                            onChangeGradable(axis.id, id)
                        }}
                        onDrag={(i) => {
                            if (!chain) return
                            const id = chain.termIds[i]
                            onDragGradable(axis.id, id)
                        }}
                    />
                ) : (
                    <div className="flex flex-wrap gap-1.5">
                        {nonTerms.map(t => {
                            const active = selectedNon.has(t.id)
                            return (
                                <button
                                    key={t.id}
                                    className={cn('term', active && 'sel')}
                                    onClick={() => onToggleNonGradable(axis.id, t.id)}
                                    title={t.label}
                                >
                                    {t.label}
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}