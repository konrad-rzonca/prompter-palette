// src/data/axes/constraints.js
export const constraintsAxes = [
    {
        id: 'negations', name: 'Negations / Constraints', kind: 'nonGradable', broaderGroupId: 'constraints',
        terms: [
            { id: 't0', label: 'no text' }, { id: 't1', label: 'no watermark' }, { id: 't2', label: 'no frame' }, { id: 't3', label: 'no border' },
            { id: 't4', label: 'no logo' }, { id: 't5', label: 'no people' }, { id: 't6', label: 'no clutter' }, { id: 't7', label: 'no artifacts' },
            { id: 't8', label: 'no ambient occlusion' }, { id: 't9', label: 'no shadows' }, { id: 't10', label: 'no shading' }, { id: 't11', label: 'no directional lighting' }
        ]
    },
    {
        id: 'quality', name: 'Quality Targets', kind: 'nonGradable', broaderGroupId: 'constraints',
        terms: [
            { id: 't0', label: 'clean render' }, { id: 't1', label: 'high fidelity' }, { id: 't2', label: 'high detail' },
            { id: 't3', label: 'high contrast' }, { id: 't4', label: 'natural skin' }, { id: 't5', label: 'realistic textures' },
            { id: 't6', label: 'physically plausible lighting' }, { id: 't7', label: 'isolated on white background' },
            { id: 't8', label: 'transparent background' }, { id: 't9', label: 'sprite sheet layout' }, { id: 't10', label: 'asset pack' }
        ]
    },
    {
        id: 'color-mood', name: 'Color Moods', kind: 'nonGradable', broaderGroupId: 'constraints',
        terms: [
            { id: 't0', label: 'monochrome' }, { id: 't1', label: 'duotone' }, { id: 't2', label: 'complementary' },
            { id: 't3', label: 'analogous' }, { id: 't4', label: 'triadic' }, { id: 't5', label: 'split complementary' },
            { id: 't6', label: 'muted palette' }, { id: 't7', label: 'pastel' }, { id: 't8', label: 'jewel tone' }, { id: 't9', label: 'neon' }
        ]
    }
];