// very light search across axis name and its terms
export function searchFilter(axis, query) {
    const q = query.toLowerCase().trim()
    if (!q) return true
    if (axis.name.toLowerCase().includes(q)) return true

    // Search within the axis's own terms array
    if (axis.terms && axis.terms.length > 0) {
        return axis.terms.some(t => t.label.toLowerCase().includes(q))
    }

    return false
}