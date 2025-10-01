// src/data/axes/environment-arch.js
export const environmentArchAxes = [
    {
        id: 'setting-scale', name: 'Setting Scale (World Size)', kind: 'gradable', broaderGroupId: 'environment-arch',
        terms: [
            { id: 't0', label: 'macro' }, { id: 't1', label: 'close up' }, { id: 't2', label: 'miniature set' }, { id: 't3', label: 'room scale' },
            { id: 't4', label: 'building scale' }, { id: 't5', label: 'city scale' }, { id: 't6', label: 'regional scale' },
            { id: 't7', label: 'planetary scale' }, { id: 't8', label: 'megastructural scale' }
        ]
    },
    {
        id: 'environment', name: 'Environment Type', kind: 'nonGradable', broaderGroupId: 'environment-arch',
        terms: [
            { id: 't0', label: 'studio' }, { id: 't1', label: 'interior' }, { id: 't2', label: 'street' }, { id: 't3', label: 'alley' }, { id: 't4', label: 'market' },
            { id: 't5', label: 'plaza' }, { id: 't6', label: 'forest' }, { id: 't7', label: 'desert' }, { id: 't8', label: 'tundra' }, { id: 't9', label: 'coastline' },
            { id: 't10', label: 'canyon' }, { id: 't11', label: 'swamp' }, { id: 't12', label: 'cave' }, { id: 't13', label: 'ruins' }, { id: 't14', label: 'megacity' },
            { id: 't15', label: 'orbital station' }, { id: 't16', label: 'ringworld rim' }
        ]
    },
    {
        id: 'arch-style', name: 'Architecture / Scale', kind: 'nonGradable', broaderGroupId: 'environment-arch',
        terms: [
            { id: 't0', label: 'brutalist' }, { id: 't1', label: 'high tech' }, { id: 't2', label: 'parametric' }, { id: 't3', label: 'biomimetic' },
            { id: 't4', label: 'arcology' }, { id: 't5', label: 'ringworld' }, { id: 't6', label: 'Dyson swarm' }, { id: 't7', label: "O'Neill cylinder" },
            { id: 't8', label: 'Stanford torus' }, { id: 't9', label: 'skybridge megastructure' }
        ]
    },
    {
        id: 'megastructures', name: 'Megastructure Types', kind: 'nonGradable', broaderGroupId: 'environment-arch',
        terms: [
            { id: 't0', label: 'arcology' }, { id: 't1', label: 'megatower' }, { id: 't2', label: 'orbital elevator' },
            { id: 't3', label: 'skybridge network' }, { id: 't4', label: 'ring megacity' }, { id: 't5', label: "O'Neill cylinder" },
            { id: 't6', label: 'Stanford torus' }, { id: 't7', label: 'Dyson swarm' }, { id: 't8', label: 'partial Dyson shell' },
            { id: 't9', label: 'Matrioshka brain' }
        ]
    },
];