import React, { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function TopPrompt({ prompt, onClearAll }) {
    const [copied, setCopied] = useState(false)
    const ref = useRef(null)

    // Measure height so side rails never overlap the top bar.
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const setVar = () => {
            const h = Math.max(64, el.getBoundingClientRect().height)
            document.documentElement.style.setProperty('--topbar-h', `${Math.round(h)}px`)
        }
        setVar()
        const ro = new ResizeObserver(setVar)
        ro.observe(el)
        window.addEventListener('resize', setVar)
        return () => { ro.disconnect(); window.removeEventListener('resize', setVar) }
    }, [prompt])

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(prompt)
            setCopied(true); setTimeout(() => setCopied(false), 900)
        } catch {}
    }

    return (
        <div className="topbar" ref={ref}>
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col md:flex-row gap-2">
                <textarea className="input !text-sm md:flex-1 h-24 md:h-20" readOnly value={prompt} />
                <div className="flex-shrink-0 flex gap-2">
                    <button className="btn btn-primary" onClick={copy}>
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                    <button className="btn btn-outline" onClick={onClearAll}>Clear all</button>
                </div>
            </div>
        </div>
    )
}
