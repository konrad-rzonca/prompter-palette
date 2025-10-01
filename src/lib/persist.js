export const STATE_KEY = 'pm-builder-state-v2'
export const HISTORY_KEY = 'pm-builder-history-v1'
export const SAVED_KEY = 'pm-builder-saved-v1'

export const loadState = () => {
    try { return JSON.parse(localStorage.getItem(STATE_KEY)) || null } catch { return null }
}
export const saveState = (s) => {
    try { localStorage.setItem(STATE_KEY, JSON.stringify(s)) } catch {}
}

export const pushHistory = (prompt) => {
    try {
        const maxLen = 20
        const now = Date.now()
        const item = { id: `${now}`, prompt, ts: now }
        const arr = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]')
        if (arr[0]?.prompt === prompt) return
        const next = [item, ...arr].slice(0, maxLen)
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
    } catch {}
}
export const getHistory = () => {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]') } catch { return [] }
}

export const getSaved = () => {
    try { return JSON.parse(localStorage.getItem(SAVED_KEY) || '[]') } catch { return [] }
}
export const savePromptPreset = (title, selection, prompt) => {
    const now = Date.now()
    const item = { id: `${now}-${Math.random().toString(36).slice(2,6)}`, title, selection, prompt, ts: now }
    // Remove any existing item with the same title before prepending the new one.
    const arr = getSaved().filter(x => x.title !== title)
    localStorage.setItem(SAVED_KEY, JSON.stringify([item, ...arr]))
    return item
}
export const deleteSaved = (id) => {
    const arr = getSaved().filter(x => x.id !== id)
    localStorage.setItem(SAVED_KEY, JSON.stringify(arr))
}

export const replaceSaved = (newData) => {
    try {
        if (!Array.isArray(newData)) {
            console.error("Loaded data is not a valid bookmark array.");
            return;
        }
        localStorage.setItem(SAVED_KEY, JSON.stringify(newData));
    } catch (error) {
        console.error("Failed to save new bookmarks:", error);
    }
};