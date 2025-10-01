// src/data/axes/motion-time.js
export const motionTimeAxes = [
    {
        id: 'weight-look', name: 'Weight / Mass (Look)', kind: 'gradable', broaderGroupId: 'motion-time',
        terms: [
            { id: 't0', label: 'featherlight' }, { id: 't1', label: 'light weight' }, { id: 't2', label: 'moderate weight' },
            { id: 't3', label: 'heavy weight' }, { id: 't4', label: 'hefty' }, { id: 't5', label: 'massive' }, { id: 't6', label: 'ponderous' }
        ]
    },
    {
        id: 'speed', name: 'Speed / Motion', kind: 'gradable', broaderGroupId: 'motion-time',
        terms: [
            { id: 't0', label: 'static' }, { id: 't1', label: 'slow' }, { id: 't2', label: 'moderate speed' }, { id: 't3', label: 'fast' },
            { id: 't4', label: 'very fast' }, { id: 't5', label: 'high speed' }, { id: 't6', label: 'supersonic' }, { id: 't7', label: 'hypersonic' }
        ]
    },
    {
        id: 'age', name: 'Time / Age', kind: 'gradable', broaderGroupId: 'motion-time',
        terms: [
            { id: 't0', label: 'brand new' }, { id: 't1', label: 'recent' }, { id: 't2', label: 'contemporary' },
            { id: 't3', label: 'weathered age' }, { id: 't4', label: 'old' }, { id: 't5', label: 'antique' },
            { id: 't6', label: 'ancient' }, { id: 't7', label: 'timeworn' }
        ]
    },
    {
        id: 'duration', name: 'Duration', kind: 'gradable', broaderGroupId: 'motion-time',
        terms: [
            { id: 't0', label: 'instant' }, { id: 't1', label: 'brief' }, { id: 't2', label: 'short duration' },
            { id: 't3', label: 'moderate duration' }, { id: 't4', label: 'prolonged' }, { id: 't5', label: 'extended' }, { id: 't6', label: 'enduring' }
        ]
    },
    {
        id: 'temperature', name: 'Temperature', kind: 'gradable', broaderGroupId: 'motion-time',
        terms: [
            { id: 't0', label: 'freezing' }, { id: 't1', label: 'cold' }, { id: 't2', label: 'cool' }, { id: 't3', label: 'neutral temp' },
            { id: 't4', label: 'warm' }, { id: 't5', label: 'hot' }, { id: 't6', label: 'scorching' }, { id: 't7', label: 'searing' }
        ]
    },
    {
        id: 'motion-blur', name: 'Motion Blur', kind: 'gradable', broaderGroupId: 'motion-time',
        terms: [
            { id: 't0', label: 'no motion blur' }, { id: 't1', label: 'slight blur' }, { id: 't2', label: 'moderate blur' },
            { id: 't3', label: 'pronounced blur' }, { id: 't4', label: 'heavy blur' }, { id: 't5', label: 'extreme blur' }, { id: 't6', label: 'streaking' }
        ]
    },
    {
        id: 'sound', name: 'Sound Presence (Visual Cue)', kind: 'gradable', broaderGroupId: 'motion-time',
        terms: [
            { id: 't0', label: 'silent' }, { id: 't1', label: 'quiet' }, { id: 't2', label: 'gentle sound' }, { id: 't3', label: 'humming' },
            { id: 't4', label: 'noisy' }, { id: 't5', label: 'loud' }, { id: 't6', label: 'deafening' }
        ]
    },
];