// src/data/axes/texture-surface.js
export const textureSurfaceAxes = [
    {
        id: 'complexity', name: 'Complexity / Ornament', kind: 'gradable', broaderGroupId: 'texture-surface',
        terms: [
            { id: 't0', label: 'minimal' }, { id: 't1', label: 'simple' }, { id: 't2', label: 'orderly' }, { id: 't3', label: 'balanced detail' },
            { id: 't4', label: 'detailed' }, { id: 't5', label: 'ornate' }, { id: 't6', label: 'baroque' }, { id: 't7', label: 'maximalist' }
        ]
    },
    {
        id: 'surface-finish', name: 'Surface Finish (Reflectivity)', kind: 'gradable', broaderGroupId: 'texture-surface',
        terms: [
            { id: 't0', label: 'matte' }, { id: 't1', label: 'eggshell' }, { id: 't2', label: 'satin' }, { id: 't3', label: 'semi gloss' },
            { id: 't4', label: 'glossy' }, { id: 't5', label: 'high gloss' }, { id: 't6', label: 'mirrorlike' }
        ]
    },
    {
        id: 'surface-rough', name: 'Surface Roughness (Texture)', kind: 'gradable', broaderGroupId: 'texture-surface',
        terms: [
            { id: 't0', label: 'glass smooth' }, { id: 't1', label: 'smooth' }, { id: 't2', label: 'fine grained' },
            { id: 't3', label: 'lightly textured' }, { id: 't4', label: 'textured' }, { id: 't5', label: 'rough' },
            { id: 't6', label: 'coarse' }, { id: 't7', label: 'jagged' }
        ]
    },
    {
        id: 'transparency', name: 'Transparency / Opacity', kind: 'gradable', broaderGroupId: 'texture-surface',
        terms: [
            { id: 't0', label: 'opaque' }, { id: 't1', label: 'semi opaque' }, { id: 't2', label: 'translucent' },
            { id: 't3', label: 'semi transparent' }, { id: 't4', label: 'transparent' }, { id: 't5', label: 'crystal clear' }
        ]
    },
    {
        id: 'wetness', name: 'Wetness / Moisture', kind: 'gradable', broaderGroupId: 'texture-surface',
        terms: [
            { id: 't0', label: 'dry' }, { id: 't1', label: 'slightly damp' }, { id: 't2', label: 'damp' }, { id: 't3', label: 'wet' },
            { id: 't4', label: 'soaked' }, { id: 't5', label: 'saturated' }, { id: 't6', label: 'drenched' }, { id: 't7', label: 'dripping' }
        ]
    },
    {
        id: 'cleanliness', name: 'Cleanliness / Decay', kind: 'gradable', broaderGroupId: 'texture-surface',
        terms: [
            { id: 't0', label: 'pristine' }, { id: 't1', label: 'spotless' }, { id: 't2', label: 'clean surface' },
            { id: 't3', label: 'slightly worn' }, { id: 't4', label: 'weathered' }, { id: 't5', label: 'grimy' },
            { id: 't6', label: 'filthy' }, { id: 't7', label: 'decayed' }, { id: 't8', label: 'decrepit' }
        ]
    },
];