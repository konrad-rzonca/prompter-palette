// src/data/axes/light-color.js
export const lightColorAxes = [
    {
        id: 'brightness', name: 'Light Level (Brightness)', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'dark' }, { id: 't1', label: 'dim' }, { id: 't2', label: 'soft lit' }, { id: 't3', label: 'balanced light' },
            { id: 't4', label: 'bright' }, { id: 't5', label: 'very bright' }, { id: 't6', label: 'dazzling' }, { id: 't7', label: 'blinding' }
        ]
    },
    {
        id: 'contrast', name: 'Contrast', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'flat contrast' }, { id: 't1', label: 'low contrast' }, { id: 't2', label: 'balanced contrast' },
            { id: 't3', label: 'punchy contrast' }, { id: 't4', label: 'high contrast' }, { id: 't5', label: 'stark contrast' },
            { id: 't6', label: 'extreme contrast' }, { id: 't7', label: 'chiaroscuro' }
        ]
    },
    {
        id: 'saturation', name: 'Color Saturation', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'monochrome (no color; 0% color saturation)' },
            { id: 't1', label: 'desaturated color saturation (very low)' },
            { id: 't2', label: 'muted color saturation (subdued)' },
            { id: 't3', label: 'natural color saturation (true-to-life)' },
            { id: 't4', label: 'vivid color saturation (high)' },
            { id: 't5', label: 'saturated color saturation (very high)' },
            { id: 't6', label: 'hyper-saturated color saturation (extreme)' },
            { id: 't7', label: 'neon color saturation (extreme, glowing)' }
        ]
    },
    {
        id: 'color-temp', name: 'Color Temperature', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'icy-cool color temperature (bluish)' },
            { id: 't1', label: 'cool color temperature' },
            { id: 't2', label: 'neutral white balance (no tint)' },
            { id: 't3', label: 'warm color temperature' },
            { id: 't4', label: 'golden-hour warm color temperature' },
            { id: 't5', label: 'amber warm color temperature' },
            { id: 't6', label: 'fiery warm color temperature (reddish)' }
        ]
    },
    {
        id: 'lighting-uniformity', name: 'Lighting Uniformity', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'dramatic lighting' }, { id: 't1', label: 'directional light' }, { id: 't2', label: 'diffuse light' },
            { id: 't3', label: 'flat lighting' }, { id: 't4', label: 'perfectly even light' }
        ]
    },
];