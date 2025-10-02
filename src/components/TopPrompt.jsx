import React, { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function TopPrompt({ prompt, onClearAll }) {
    const [copied, setCopied] = useState(false)
    const barRef = useRef(null)
    const taRef = useRef(null)

    // Auto-size the prompt textarea to fit content
    const autosize = () => {
        const ta = taRef.current
        if (!ta) return
        ta.style.height = 'auto'
        // Cap height so it doesn't eat the page; 30vh feels right.
        const maxPx = Math.round(window.innerHeight * 0.3)
        ta.style.height = Math.min(ta.scrollHeight, maxPx) + 'px'
    }

    useEffect(() => { autosize() }, [prompt])
    useEffect(() => {
        const onResize = () => autosize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    // Measure height so side rails never overlap the top bar.
    useEffect(() => {
        const el = barRef.current
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
        <div className="topbar" ref={barRef}>
            {/* Keep the top prompt content centered; header above is now full-bleed */}
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col md:flex-row gap-2">
                <textarea
                    ref={taRef}
                    className="input !text-sm md:flex-1 no-scrollbar"
                    readOnly
                    value={prompt}
                    rows={1}
                    style={{ overflow: 'hidden' }}
                />
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
