import React, { useEffect, useState } from 'react'
import { Save, BookMarked, Copy, Trash2, Download } from 'lucide-react'
import { getSaved, savePromptPreset, deleteSaved } from '../lib/persist.js'

export default function RightNav({ selection, prompt, onLoadSaved }) {
    const [title, setTitle] = useState('')
    const [savedItems, setSavedItems] = useState([])

    const refresh = () => {
        setSavedItems(getSaved())
    }

    useEffect(() => { refresh() }, [])

    const handleSave = () => {
        const t = (title || '').trim() || new Date().toLocaleString()
        savePromptPreset(t, selection, prompt)
        refresh()
    }

    const handleLoad = (item) => {
        onLoadSaved(item.selection)
        setTitle(item.title) // Pre-fill title for easy overwriting
    }

    const handleDelete = (itemId) => {
        deleteSaved(itemId)
        refresh()
    }

    return (
        <div className="card p-4 space-y-4">
            <div>
                <div className="text-sm font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <BookMarked className="w-4 h-4" /> Bookmarks
                </div>
                <div className="flex gap-2">
                    <input
                        className="input"
                        placeholder="Bookmark title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <button className="btn btn-outline" onClick={handleSave}>
                        <Save className="w-4 h-4 mr-2" /> Save
                    </button>
                </div>
            </div>

            <div>
                <div className="text-sm font-semibold text-slate-800 mb-2">Saved prompts</div>
                {savedItems.length === 0 && <div className="text-xs text-slate-500">No saved prompts yet.</div>}
                <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                    {savedItems.map(item => (
                        <li key={item.id} className="p-2 rounded-lg border border-slate-200">
                            <div className="text-sm font-medium text-slate-800 truncate" title={item.title}>
                                {item.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mb-1">{new Date(item.ts).toLocaleString()}</div>
                            <div className="text-xs text-slate-600 line-clamp-2" title={item.prompt}>{item.prompt}</div>
                            <div className="mt-2 flex items-center gap-2">
                                <button
                                    className="btn btn-ghost !px-2 !py-1 text-xs"
                                    onClick={() => handleLoad(item)}
                                >
                                    <Download className="w-3.5 h-3.5 mr-1" /> Load
                                </button>
                                <button
                                    className="btn btn-ghost !px-2 !py-1 text-xs text-red-600 hover:bg-red-50"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    <Trash2 className="w-3.5 h-3.5 mr-1" /> Delete
                                </button>
                                <button
                                    className="btn btn-ghost !px-2 !py-1 text-xs ml-auto"
                                    onClick={() => navigator.clipboard.writeText(item.prompt)}
                                >
                                    <Copy className="w-3.5 h-3.5 mr-1" /> Copy
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}