// src/data/axes/narrative-tone.js
export const narrativeToneAxes = [
    {
        id: 'energy', name: 'Energy / Action', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'still' }, { id: 't1', label: 'poised' }, { id: 't2', label: 'active' }, { id: 't3', label: 'dynamic' },
            { id: 't4', label: 'high energy' }, { id: 't5', label: 'frenetic' }, { id: 't6', label: 'explosive' }
        ]
    },
    {
        id: 'threat', name: 'Threat / Danger', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'harmless' }, { id: 't1', label: 'mild threat' }, { id: 't2', label: 'uneasy' }, { id: 't3', label: 'ominous' },
            { id: 't4', label: 'menacing' }, { id: 't5', label: 'dangerous' }, { id: 't6', label: 'lethal' }, { id: 't7', label: 'apocalyptic' }
        ]
    },
    {
        id: 'crowd', name: 'Crowd Emotion', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'subdued' }, { id: 't1', label: 'relaxed' }, { id: 't2', label: 'upbeat' }, { id: 't3', label: 'lively' },
            { id: 't4', label: 'festive' }, { id: 't5', label: 'raucous' }, { id: 't6', label: 'chaotic' }
        ]
    },
    {
        id: 'luxury', name: 'Luxury / Costliness', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'humble' }, { id: 't1', label: 'modest' }, { id: 't2', label: 'practical' }, { id: 't3', label: 'upscale' },
            { id: 't4', label: 'luxurious' }, { id: 't5', label: 'opulent' }, { id: 't6', label: 'palatial' }
        ]
    },
    {
        id: 'rarity', name: 'Rarity', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'common' }, { id: 't1', label: 'ordinary' }, { id: 't2', label: 'uncommon' }, { id: 't3', label: 'rare' },
            { id: 't4', label: 'very rare' }, { id: 't5', label: 'unique' }, { id: 't6', label: 'singular' }, { id: 't7', label: 'one of a kind' }
        ]
    },
    {
        id: 'realism', name: 'Realism / Abstraction', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'photorealistic' }, { id: 't1', label: 'realistic' }, { id: 't2', label: 'stylized' },
            { id: 't3', label: 'illustrative' }, { id: 't4', label: 'painterly' }, { id: 't5', label: 'surreal' },
            { id: 't6', label: 'abstract' }, { id: 't7', label: 'non representational' }
        ]
    },
    {
        id: 'minmax', name: 'Minimalism → Maximalism', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'ultra minimal' }, { id: 't1', label: 'minimal' }, { id: 't2', label: 'sparse' }, { id: 't3', label: 'balanced composition' },
            { id: 't4', label: 'rich composition' }, { id: 't5', label: 'full composition' }, { id: 't6', label: 'maximal' }, { id: 't7', label: 'hyper maximal' }
        ]
    },
    {
        id: 'creature-scale', name: 'Creature Scale & Presence', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'diminutive' }, { id: 't1', label: 'small' }, { id: 't2', label: 'imposing' },
            { id: 't3', label: 'massive' }, { id: 't4', label: 'colossal' }, { id: 't5', label: 'world scale' }
        ]
    },
    {
        id: 'action-pose', name: 'Action Pose Intensity', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'neutral stance' }, { id: 't1', label: 'relaxed pose' }, { id: 't2', label: 'dynamic pose' },
            { id: 't3', label: 'power pose' }, { id: 't4', label: 'extreme action' }, { id: 't5', label: 'airborne' }
        ]
    },
    {
        id: 'env-fx', name: 'Env FX Intensity', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'subtle bloom' }, { id: 't1', label: 'bloom' }, { id: 't2', label: 'heavy bloom' }, { id: 't3', label: 'lens flare' },
            { id: 't4', label: 'heavy flare' }, { id: 't5', label: 'god rays' }, { id: 't6', label: 'volumetric beams' }
        ]
    },
    {
        id: 'chaos', name: 'Chaos / Randomness', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'orderly' }, { id: 't1', label: 'mild randomness' }, { id: 't2', label: 'varied' },
            { id: 't3', label: 'chaotic' }, { id: 't4', label: 'highly chaotic' }, { id: 't5', label: 'entropic' }
        ]
    },
    {
        id: 'reality-bend', name: 'Reality Bend (Surreal)', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'plausible twist' }, { id: 't1', label: 'unlikely' }, { id: 't2', label: 'surreal' },
            { id: 't3', label: 'dreamlike' }, { id: 't4', label: 'uncanny' }, { id: 't5', label: 'impossible' }, { id: 't6', label: 'reality breaking' }
        ]
    },
    {
        id: 'glitch', name: 'Error / Glitch Aesthetic', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'no glitch' }, { id: 't1', label: 'subtle glitch' }, { id: 't2', label: 'datamosh' },
            { id: 't3', label: 'heavy glitch' }, { id: 't4', label: 'corrupted data' }, { id: 't5', label: 'broken image' }
        ]
    },
    {
        id: 'visceral', name: 'Visceral / Gore (safe range)', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'non visceral' }, { id: 't1', label: 'gritty' }, { id: 't2', label: 'grim' },
            { id: 't3', label: 'grimdark' }, { id: 't4', label: 'macabre' }
        ]
    },
    {
        id: 'humor', name: 'Humor Tone', kind: 'gradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'serious tone' }, { id: 't1', label: 'dry' }, { id: 't2', label: 'witty' }, { id: 't3', label: 'playful' },
            { id: 't4', label: 'goofy' }, { id: 't5', label: 'absurdist' }, { id: 't6', label: 'slapstick' }
        ]
    },
    {
        id: 'mood', name: 'Mood / Feelings', kind: 'nonGradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'serene' }, { id: 't1', label: 'calm' }, { id: 't2', label: 'gentle' }, { id: 't3', label: 'hopeful' }, { id: 't4', label: 'lively' },
            { id: 't5', label: 'energetic' }, { id: 't6', label: 'intense' }, { id: 't7', label: 'dramatic' }, { id: 't8', label: 'turbulent' },
            { id: 't9', label: 'cozy' }, { id: 't10', label: 'nostalgic' }, { id: 't11', label: 'melancholic' }, { id: 't12', label: 'mysterious' },
            { id: 't13', label: 'eerie' }, { id: 't14', label: 'ominous' }, { id: 't15', label: 'terrifying' }, { id: 't16', label: 'awe struck' }
        ]
    },
    {
        id: 'narrative', name: 'Narrative Tone', kind: 'nonGradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'wholesome' }, { id: 't1', label: 'playful' }, { id: 't2', label: 'adventurous' }, { id: 't3', label: 'mysterious' },
            { id: 't4', label: 'ominous' }, { id: 't5', label: 'catastrophic' }, { id: 't6', label: 'post apocalyptic' }, { id: 't7', label: 'hopeful' }
        ]
    },
    {
        id: 'symbolic', name: 'Symbolic Tones', kind: 'nonGradable', broaderGroupId: 'narrative-tone',
        terms: [
            { id: 't0', label: 'pure' }, { id: 't1', label: 'sacred' }, { id: 't2', label: 'heroic' }, { id: 't3', label: 'sinister' },
            { id: 't4', label: 'corrupted' }, { id: 't5', label: 'profane' }, { id: 't6', label: 'infernal' }
        ]
    },
];