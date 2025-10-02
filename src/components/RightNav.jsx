import React, { useEffect, useState, useRef } from 'react'
import { Save, BookMarked, Copy, Trash2, Download, FileUp } from 'lucide-react'
import { getSaved, savePromptPreset, deleteSaved, replaceSaved } from '../lib/persist.js'

export default function RightNav({ selection, prompt, onLoadSaved }) {
    const [title, setTitle] = useState('')
    const [savedItems, setSavedItems] = useState([])
    const fileInputRef = useRef(null);

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

    const handleDownloadAll = () => {
        const data = getSaved();
        if (data.length === 0) {
            alert("No saved prompts to download.");
            return;
        }

        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'prompt-magnitude-builder-bookmarks.json';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (!confirm("This will replace all your current bookmarks with the contents of the file. Are you sure?")) {
            event.target.value = null; // Reset input
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const loadedData = JSON.parse(e.target.result);
                if (!Array.isArray(loadedData)) {
                    throw new Error("Invalid format: JSON file must contain an array.");
                }
                replaceSaved(loadedData);
                refresh();
                alert(`Successfully imported ${loadedData.length} bookmarks.`);
            } catch (error) {
                alert("Failed to load bookmarks. The file may be corrupted or in the wrong format.");
                console.error("Error parsing bookmarks file:", error);
            } finally {
                event.target.value = null; // Reset input so the same file can be loaded again
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="card p-4 space-y-4">
            <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
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
                <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Saved prompts</div>
                    <div className="flex items-center gap-1">
                        <button
                            className="btn btn-ghost !p-2"
                            onClick={handleUploadClick}
                            title="Load prompts from a JSON file"
                        >
                            <FileUp className="w-4 h-4" />
                        </button>
                        <button
                            className="btn btn-ghost !p-2"
                            onClick={handleDownloadAll}
                            title="Download all saved prompts as JSON"
                            disabled={savedItems.length === 0}
                        >
                            <Download className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {savedItems.length === 0 && <div className="text-xs text-slate-700 dark:text-slate-300">No saved prompts yet.</div>}
                <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                    {savedItems.map(item => (
                        <li key={item.id} className="p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                            <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate" title={item.title}>
                                {item.title}
                            </div>
                            <div className="text-[11px] text-slate-600 dark:text-slate-400 mb-1">{new Date(item.ts).toLocaleString()}</div>
                            <div className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2" title={item.prompt}>{item.prompt}</div>
                            <div className="mt-2 flex items-center gap-2">
                                <button
                                    className="btn btn-ghost !px-2 !py-1 text-xs"
                                    onClick={() => handleLoad(item)}
                                >
                                    <Download className="w-3.5 h-3.5 mr-1" /> Load
                                </button>
                                <button
                                    className="btn btn-ghost !px-2 !py-1 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
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
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".json,application/json"
                style={{ display: 'none' }}
            />
        </div>
    )
}
