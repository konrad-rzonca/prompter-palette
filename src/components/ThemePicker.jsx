import React, { useEffect, useState, useCallback } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'

const STORAGE_KEY = 'pp-theme' // 'light' | 'dark' | 'system'
const valid = new Set(['light','dark','system'])

function applyTheme(mode) {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = mode === 'dark' || (mode === 'system' && prefersDark)
    root.classList.toggle('dark', useDark)
}

export default function ThemePicker() {
    const [mode, setMode] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            return valid.has(stored) ? stored : 'system'
        } catch { return 'system' }
    })

    useEffect(() => {
        applyTheme(mode)
        try { localStorage.setItem(STORAGE_KEY, mode) } catch {}
    }, [mode])

    // react to system changes only when in 'system'
    useEffect(() => {
        if (mode !== 'system') return
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        const onChange = () => applyTheme('system')
        try { mq.addEventListener('change', onChange) } catch { mq.addListener(onChange) }
        return () => {
            try { mq.removeEventListener('change', onChange) } catch { mq.removeListener(onChange) }
        }
    }, [mode])

    const select = useCallback((val) => () => setMode(val), [])

    return (
        <div className="seg3" role="radiogroup" aria-label="Theme picker">
            <button
                type="button"
                role="radio"
                aria-pressed={mode === 'light'}
                aria-checked={mode === 'light'}
                onClick={select('light')}
                title="Light"
            >
                <Sun className="w-4 h-4" />
            </button>
            <button
                type="button"
                role="radio"
                aria-pressed={mode === 'dark'}
                aria-checked={mode === 'dark'}
                onClick={select('dark')}
                title="Dark"
            >
                <Moon className="w-4 h-4" />
            </button>
            <button
                type="button"
                role="radio"
                aria-pressed={mode === 'system'}
                aria-checked={mode === 'system'}
                onClick={select('system')}
                title="System"
            >
                <Laptop className="w-4 h-4" />
            </button>
        </div>
    )
}
