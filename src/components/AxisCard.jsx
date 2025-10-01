import React from 'react'
import cn from 'classnames'
import { Gauge, Tag, X } from 'lucide-react'
import DiscreteSlider from './DiscreteSlider.jsx'

export default function AxisCard({
                                     axis, selection,
                                     onClearGradable, onChangeGradable, onDragGradable,
                                     onToggleNonGradable
                                 }) {
    const isGrad = axis.kind === 'gradable'
    const Icon = isGrad ? Gauge : Tag
    const terms = axis.terms || []

    // Gradable data
    const labels = terms.map(t => t.label)
    const selectedGradableId = selection.gradable[axis.id]
    const valueIndex = selectedGradableId ? terms.findIndex(t => t.id === selectedGradableId) : -1
    const hasGradSelection = isGrad && valueIndex >= 0
    const selectedLabel = hasGradSelection ? labels[valueIndex] : ''

    // Non-gradable data
    const nonTerms = !isGrad ? terms : []
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
                        count={terms.length || 2}
                        valueIndex={hasGradSelection ? valueIndex : null}
                        labels={labels}
                        selectedLabel={selectedLabel}
                        onChange={(i) => {
                            if (!terms[i]) return
                            onChangeGradable(axis.id, terms[i].id)
                        }}
                        onDrag={(i) => {
                            if (!terms[i]) return
                            onDragGradable(axis.id, terms[i].id)
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