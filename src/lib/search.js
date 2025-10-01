// very light search across axis name and its terms
export function searchFilter(axis, query, terms) {
    const q = query.toLowerCase().trim()
    if (!q) return true
    if (axis.name.toLowerCase().includes(q)) return true
    const axisTerms = terms.filter(t => t.axisId === axis.id)
    return axisTerms.some(t => t.label.toLowerCase().includes(q))
}
