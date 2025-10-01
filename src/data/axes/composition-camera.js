// src/data/axes/composition-camera.js
export const compositionCameraAxes = [
    {
        id: 'vantage', name: 'Vantage / Angle', kind: 'gradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'eye-level' }, { id: 't1', label: 'low-angle' }, { id: 't2', label: "worm's-eye" }, { id: 't3', label: 'high-angle' },
            { id: 't4', label: "bird's-eye" }, { id: 't5', label: 'top-down' }, { id: 't6', label: 'dimetric (2:1)' }, { id: 't7', label: 'oblique' }
        ]
    },
    {
        id: 'horizontal-angle', name: 'Horizontal Angle (Yaw)', kind: 'gradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'front view, 0° yaw' }, { id: 't1', label: 'off-center view, 22.5° yaw' },
            { id: 't2', label: 'three-quarter view, 45° yaw' }, { id: 't3', label: 'dramatic three-quarter view, 67.5° yaw' },
            { id: 't4', label: 'profile view, 90° yaw' }
        ]
    },
    {
        id: 'vertical-angle', name: 'Vertical Angle (Pitch)', kind: 'gradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'eye-level view, 0° pitch' }, { id: 't1', label: 'slight high-angle, 26.6° pitch' },
            { id: 't2', label: 'isometric view, 35.3° pitch' }, { id: 't3', label: 'high-angle view, 45° pitch' },
            { id: 't4', label: 'top-down view, 90° pitch' }
        ]
    },
    {
        id: 'camera-move', name: 'Camera Movement Feel', kind: 'gradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'locked off' }, { id: 't1', label: 'slight drift' }, { id: 't2', label: 'slow pan' }, { id: 't3', label: 'tracking' },
            { id: 't4', label: 'dolly zoom' }, { id: 't5', label: 'whip pan' }, { id: 't6', label: 'chaotic handheld' }
        ]
    },
    {
        id: 'fgbg', name: 'Foreground/Background Balance', kind: 'gradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'foreground dominant' }, { id: 't1', label: 'balanced layers' },
            { id: 't2', label: 'background dominant' }, { id: 't3', label: 'deep layered' }
        ]
    },
    {
        id: 'compositional-uniformity', name: 'Compositional Uniformity', kind: 'gradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'highly varied composition' }, { id: 't1', label: 'varied composition' },
            { id: 't2', label: 'balanced elements' }, { id: 't3', label: 'uniform composition' }, { id: 't4', label: 'monotonous' }
        ]
    },
    {
        id: 'focal-feel', name: 'Focal Feel (no numbers)', kind: 'nonGradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'ultra-wide' }, { id: 't1', label: 'wide' }, { id: 't2', label: 'standard' },
            { id: 't3', label: 'short-tele' }, { id: 't4', label: 'telephoto' }, { id: 't5', label: 'super-tele' }
        ]
    },
    {
        id: 'composition', name: 'Composition Bias', kind: 'nonGradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'centered' }, { id: 't1', label: 'rule-of-thirds' }, { id: 't2', label: 'golden-ratio' },
            { id: 't3', label: 'leading lines' }, { id: 't4', label: 'symmetrical' }, { id: 't5', label: 'radial' },
            { id: 't6', label: 'layered' }, { id: 't7', label: 'collage' }
        ]
    },
    {
        id: 'background', name: 'Background Treatment', kind: 'nonGradable', broaderGroupId: 'composition-camera',
        terms: [
            { id: 't0', label: 'seamless' }, { id: 't1', label: 'clean backdrop' }, { id: 't2', label: 'gradient' }, { id: 't3', label: 'vignette' },
            { id: 't4', label: 'textured wall' }, { id: 't5', label: 'environment-rich' }, { id: 't6', label: 'deep scene' }
        ]
    },
];