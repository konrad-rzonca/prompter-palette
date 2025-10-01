// src/data/axes/optics-focus.js
export const opticsFocusAxes = [
    {
        id: 'sharpness', name: 'Sharpness / Focus', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'blurry' }, { id: 't1', label: 'soft focus' }, { id: 't2', label: 'crisp' }, { id: 't3', label: 'sharp' },
            { id: 't4', label: 'razor sharp' }, { id: 't5', label: 'tack sharp' }, { id: 't6', label: 'hyper sharp' }
        ]
    },
    {
        id: 'dof', name: 'Depth of Field', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'deep DOF' }, { id: 't1', label: 'moderate DOF' }, { id: 't2', label: 'shallow DOF' },
            { id: 't3', label: 'very shallow DOF' }, { id: 't4', label: 'razor thin' }, { id: 't5', label: 'bokeh heavy' }
        ]
    },
    {
        id: 'grain', name: 'Noise / Grain', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'grain free' }, { id: 't1', label: 'subtle grain' }, { id: 't2', label: 'light grain' },
            { id: 't3', label: 'noticeable grain' }, { id: 't4', label: 'gritty' }, { id: 't5', label: 'heavy grain' }, { id: 't6', label: 'noisy' }
        ]
    },
    {
        id: 'resolution', name: 'Resolution / Detail', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'simple shapes' }, { id: 't1', label: 'low detail' }, { id: 't2', label: 'clean detail' },
            { id: 't3', label: 'detailed' }, { id: 't4', label: 'highly detailed' }, { id: 't5', label: 'intricate' },
            { id: 't6', label: 'ultra detailed' }, { id: 't7', label: 'micro detail' }
        ]
    },
    {
        id: 'detail-distribution', name: 'Detail Distribution', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'vignetted detail' }, { id: 't1', label: 'center focused detail' },
            { id: 't2', label: 'even detail distribution' }, { id: 't3', label: 'uniform edge to edge detail' }
        ]
    },
    {
        id: 'pixel-fidelity', name: 'Pixel Fidelity', kind: 'nonGradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'pixel-perfect' }, { id: 't1', label: 'anti-aliased' },
            { id: 't2', label: 'crisp pixels' }, { id: 't3', label: 'subpixel rendering' }
        ]
    },
];