// src/data/axes/scale-geometry.js
export const scaleGeometryAxes = [
    {
        id: 'size', name: 'Size / Scale', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'microscopic' }, { id: 't1', label: 'minuscule' }, { id: 't2', label: 'minute' }, { id: 't3', label: 'miniature' },
            { id: 't4', label: 'tiny' }, { id: 't5', label: 'small' }, { id: 't6', label: 'medium size' }, { id: 't7', label: 'large' },
            { id: 't8', label: 'huge' }, { id: 't9', label: 'gigantic' }, { id: 't10', label: 'colossal' }, { id: 't11', label: 'megastructural' }
        ]
    },
    {
        id: 'quantity', name: 'Quantity / Density', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'single' }, { id: 't1', label: 'few' }, { id: 't2', label: 'several' }, { id: 't3', label: 'many' },
            { id: 't4', label: 'numerous' }, { id: 't5', label: 'abundant' }, { id: 't6', label: 'teeming' }, { id: 't7', label: 'swarming' }
        ]
    },
    {
        id: 'distance', name: 'Subject Distance', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'touching' }, { id: 't1', label: 'near' }, { id: 't2', label: 'mid distance' }, { id: 't3', label: 'far' },
            { id: 't4', label: 'distant' }, { id: 't5', label: 'remote' }, { id: 't6', label: 'horizon distant' }
        ]
    },
    {
        id: 'framing', name: 'Framing Width', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'close up' }, { id: 't1', label: 'tight shot' }, { id: 't2', label: 'medium shot' }, { id: 't3', label: 'wide shot' },
            { id: 't4', label: 'ultra wide shot' }, { id: 't5', label: 'panoramic' }, { id: 't6', label: 'aerial' }, { id: 't7', label: 'orbital' }
        ]
    },
    {
        id: 'height', name: 'Height / Elevation', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'low lying' }, { id: 't1', label: 'short' }, { id: 't2', label: 'tall' }, { id: 't3', label: 'very tall' },
            { id: 't4', label: 'towering' }, { id: 't5', label: 'soaring' }, { id: 't6', label: 'sky high' }
        ]
    },
    {
        id: 'depth', name: 'Depth / Downward', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'shallow' }, { id: 't1', label: 'moderate depth' }, { id: 't2', label: 'deep' }, { id: 't3', label: 'very deep' },
            { id: 't4', label: 'abyssal' }, { id: 't5', label: 'bottomless' }
        ]
    },
    {
        id: 'length', name: 'Length / Span', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'short length' }, { id: 't1', label: 'mid length' }, { id: 't2', label: 'long length' },
            { id: 't3', label: 'very long length' }, { id: 't4', label: 'elongated' }, { id: 't5', label: 'interminable' }
        ]
    },
    {
        id: 'width', name: 'Width / Thickness', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'thin' }, { id: 't1', label: 'slender' }, { id: 't2', label: 'moderate width' }, { id: 't3', label: 'broad' },
            { id: 't4', label: 'wide' }, { id: 't5', label: 'ultra wide width' }, { id: 't6', label: 'expansive' }
        ]
    },
    {
        id: 'geometry', name: 'Geometry / Angularity', kind: 'gradable', broaderGroupId: 'scale-geometry',
        terms: [
            { id: 't0', label: 'rounded' }, { id: 't1', label: 'soft edged' }, { id: 't2', label: 'gently faceted' },
            { id: 't3', label: 'angular' }, { id: 't4', label: 'sharp edged' }, { id: 't5', label: 'knife edged' }
        ]
    },
];