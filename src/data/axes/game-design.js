// src/data/axes/game-design.js
export const gameDesignAxes = [
    {
        id: 'game-view', name: 'Game Perspective / View', kind: 'nonGradable', broaderGroupId: 'game-design',
        terms: [
            { id: 't0', label: 'top-down' }, { id: 't1', label: 'dimetric (2:1 isometric)' }, { id: 't2', label: 'isometric' },
            { id: 't3', label: '2.5D' }, { id: 't4', label: 'first-person' }, { id: 't5', label: 'third-person' },
            { id: 't6', label: 'side-scroller' }, { id: 't7', label: 'platformer view' },
            { id: 't8', label: 'not perpendicular', prompt: 'Avoid squares and vertical and horizontal lines.' }
        ]
    },
    {
        id: 'game-art-style', name: 'Game Art Style', kind: 'nonGradable', broaderGroupId: 'game-design',
        terms: [
            { id: 't0', label: '2D art' }, { id: 't1', label: 'sprite' }, { id: 't2', label: 'pixel art' }, { id: 't3', label: 'voxel art' },
            { id: 't4', label: 'cel shaded' }, { id: 't5', label: 'low poly' }, { id: 't6', label: 'hand painted texture' },
            { id: 't7', label: 'concept art' }, { id: 't8', label: 'dithering' }, { id: 't9', label: 'limited palette' }, { id: 't10', label: 'ANSI art' }
        ]
    },
    {
        id: 'game-elements', name: 'Game Elements / Assets', kind: 'nonGradable', broaderGroupId: 'game-design',
        terms: [
            { id: 't0', label: 'game asset' }, { id: 't1', label: 'character sprite sheet' }, { id: 't2', label: 'game UI' },
            { id: 't3', label: 'HUD display' }, { id: 't4', label: 'level design' }, { id: 't5', label: 'game background' },
            { id: 't6', label: 'item icon' }, { id: 't7', label: 'skill icon' }
        ]
    },
];