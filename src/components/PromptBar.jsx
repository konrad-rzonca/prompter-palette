import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function PromptBar({ chips, prompt, onRemove }) {
    const [copied, setCopied] = useState(false)
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(prompt)
            setCopied(true)
            setTimeout(() => setCopied(false), 1200)
        } catch {}
    }

    return (
        <div className="sticky bottom-0 z-50">
            <div className="mx-auto max-w-7xl px-4 pb-4">
                <div className="card p-3">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        {chips.map(chip => (
                            <span key={chip.id} className={chip.kind === 'gradable' ? 'chip' : 'chip-ghost'}>
                {chip.text}
                                <button
                                    className="ml-1 opacity-80 hover:opacity-100"
                                    onClick={() => onRemove(chip)}
                                    title="Remove"
                                >
                  ×
                </button>
              </span>
                        ))}
                        {chips.length === 0 && (
                            <span className="text-sm text-slate-500">Selections will appear here as tags…</span>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
            <textarea
                className="input !text-sm !h-24"
                readOnly
                value={prompt}
            />
                        <button className="btn btn-primary h-24" onClick={copy}>
                            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
