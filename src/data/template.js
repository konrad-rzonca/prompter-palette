// src/data/template.js

export const TEMPLATE_SLOTS = [
    { id: 'slot-scale',     name: 'Scale',          axisIds: ['size','quantity','distance','framing','height','depth','length','width','geometry','setting-scale'], joiner: ', ' },
    { id: 'slot-light',     name: 'Light & Color',  axisIds: ['brightness','contrast','saturation','color-temp','lighting-uniformity'], joiner: ', ' },
    { id: 'slot-optics',    name: 'Optics',         axisIds: ['sharpness','dof','grain','resolution','pixel-fidelity','detail-distribution'], joiner: ', ' },
    { id: 'slot-surface',   name: 'Surface',        axisIds: ['complexity','surface-finish','surface-rough','transparency','wetness','cleanliness','materials','patterns'], joiner: ', ' },
    { id: 'slot-atmo',      name: 'Atmosphere',     axisIds: ['atmo-density','smoke','weather'], joiner: ', ' },
    { id: 'slot-motion',    name: 'Motion & Time',  axisIds: ['weight-look','speed','age','duration','temperature','motion-blur','sound'], joiner: ', ' },
    { id: 'slot-camera',    name: 'Camera & Comp',  axisIds: ['vantage','horizontal-angle','vertical-angle','focal-feel','composition','background','camera-move','fgbg','compositional-uniformity'], joiner: ', ' },
    { id: 'slot-style',     name: 'Style',          axisIds: ['style-photographic','style-lighting','style-art','style-illustration','style-3d','film-stock'], joiner: ', ' },
    { id: 'slot-environ',   name: 'Environment',    axisIds: ['environment','arch-style','megastructures'], joiner: ', ' },
    { id: 'slot-narrative', name: 'Narrative',      axisIds: ['energy','threat','mood','narrative','crowd','luxury','rarity','realism','minmax','creature-scale','action-pose','env-fx','chaos','reality-bend','glitch','visceral','humor','symbolic'], joiner: ', ' },
    { id: 'slot-ui',        name: 'UI & Type',      axisIds: ['tech-ui','icon-style','type-vibe'], joiner: ', ' },
    { id: 'slot-game',      name: 'Game Design',    axisIds: ['game-view', 'game-art-style', 'game-elements'], joiner: ', ' },
    { id: 'slot-neg',       name: 'Constraints',    axisIds: ['negations','quality','color-mood'], joiner: ', ' },
];

export const PROFILE_DEFAULT = {
    id: 'profile-default',
    name: 'General',
    slotOrder: ['slot-scale','slot-light','slot-optics','slot-surface','slot-atmo','slot-motion','slot-camera','slot-style','slot-environ','slot-narrative','slot-ui','slot-game','slot-neg'],
    punctuationStyle: { slotSep: '; ', termSep: ', ' },
};