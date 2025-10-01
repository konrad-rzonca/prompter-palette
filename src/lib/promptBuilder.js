export function computeChips(selection, axes, terms) {
    const chips = []
    Object.entries(selection.gradable).forEach(([axisId, termId]) => {
        const axis = axes.find(a => a.id === axisId)
        const term = terms.find(t => t.id === termId)
        const mod = selection.modifiers[axisId] || ''
        if (!axis || !term) return
        const text = (mod ? `${mod} ` : '') + term.label
        chips.push({ id: `g-${axisId}`, kind: 'gradable', axisId, termId, text, slot: slotForAxis(axisId) })
    })
    Object.entries(selection.nonGradable).forEach(([axisId, arr]) => {
        const axis = axes.find(a => a.id === axisId); if (!axis) return
            ;(arr || []).forEach(termId => {
            const term = terms.find(t => t.id === termId); if (!term) return
            chips.push({ id: `n-${axisId}-${termId}`, kind: 'nonGradable', axisId, termId, text: term.label, slot: slotForAxis(axisId) })
        })
    })
    return chips
}

let _axisToSlotCache = null
function slotForAxis(axisId) {
    if (!_axisToSlotCache) return null
    return _axisToSlotCache[axisId] || null
}

export function slotOrderedChipIds(chips, templateSlots) {
    _axisToSlotCache = {}
    templateSlots.forEach(s => s.axisIds.forEach(aid => { _axisToSlotCache[aid] = s.id }))
    const slotOrder = templateSlots.map(s => s.id)
    return chips.slice().sort((a, b) => slotOrder.indexOf(a.slot) - slotOrder.indexOf(b.slot)).map(c => c.id)
}

export function buildPrompt(selection, profile, templateSlots, axes, terms) {
    const axisToSlot = {}
    templateSlots.forEach(s => s.axisIds.forEach(aid => axisToSlot[aid] = s.id))
    const slotTexts = {}
    const addToSlot = (slotId, text) => { if (!text) return; (slotTexts[slotId] ||= []).push(text) }

    Object.entries(selection.gradable).forEach(([axisId, termId]) => {
        const term = terms.find(t => t.id === termId)
        const mod = selection.modifiers[axisId] || ''
        if (term) addToSlot(axisToSlot[axisId], (mod ? `${mod} ` : '') + (term.promptText ?? term.label))
    })
    Object.entries(selection.nonGradable).forEach(([axisId, arr]) => {
        ;(arr || []).forEach(termId => {
            const term = terms.find(t => t.id === termId)
            if (term) addToSlot(axisToSlot[axisId], term.promptText ?? term.label)
        })
    })

    const parts = []
    profile.slotOrder.forEach(slotId => {
        const s = templateSlots.find(x => x.id === slotId)
        const items = slotTexts[slotId]
        if (items && items.length) parts.push(items.join(s.joiner || profile.punctuationStyle.termSep))
    })
    return parts.join(profile.punctuationStyle.slotSep).trim()
}
