import React, { useEffect, useState } from 'react'
import { getSaved, deleteSaved, updateSavedTitle } from '../lib/persist.js'
import { Pencil, Trash2, Check, X } from 'lucide-react'

export default function SavedPanel({ onClose, onLoad }) {
    const [items, setItems] = useState([])
    const [editing, setEditing] = useState(null)
    const [editTitle, setEditTitle] = useState('')

    const refresh = () => setItems(getSaved())

    useEffect(() => { refresh() }, [])

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-end md:items-center justify-center p-4">
            <div className="card w-full md:max-w-3xl max-h-[80vh] overflow-hidden">
                <div className="flex items-center justify-between p-3 border-b border-slate-200">
                    <div className="text-sm font-semibold text-slate-800">Saved prompts</div>
                    <button className="btn btn-ghost !py-1 !px-2" onClick={onClose}>Close</button>
                </div>

                <div className="p-3 space-y-3 overflow-auto">
                    {items.length === 0 && <div className="text-sm text-slate-500">No saved prompts yet.</div>}

                    {items.map(item => (
                        <div key={item.id} className="p-3 rounded-xl border border-slate-200">
                            <div className="flex items-center gap-2">
                                {editing === item.id ? (
                                    <>
                                        <input className="input !py-1 !px-2 text-sm" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                                        <button
                                            className="btn btn-primary !py-1 !px-2"
                                            onClick={() => { updateSavedTitle(item.id, editTitle.trim() || item.title); setEditing(null); refresh() }}
                                        >
                                            <Check className="w-4 h-4" />
                                        </button>
                                        <button className="btn btn-ghost !py-1 !px-2" onClick={() => setEditing(null)}>
                                            <X className="w-4 h-4" />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                                        <div className="text-xs text-slate-500">• {new Date(item.ts).toLocaleString()}</div>
                                        <button className="btn btn-ghost !py-1 !px-2 ml-auto" onClick={() => { setEditing(item.id); setEditTitle(item.title) }}>
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="mt-2 text-xs text-slate-600 line-clamp-2">{item.prompt}</div>

                            <div className="mt-3 flex gap-2">
                                <button className="btn btn-outline" onClick={() => onLoad(item)}>Load & edit</button>
                                <button className="btn btn-ghost" onClick={() => { deleteSaved(item.id); refresh() }}>
                                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
