// src/data/sampleData.js

// Replaces demo data with full production-ready taxonomy built from the user's baseline lists.
// Structure is compatible with the existing app (AXES / CHAINS / TERMS / TEMPLATE_SLOTS / PROFILE_DEFAULT)

// --- Broader groups ---
export const BROADER_GROUPS = [
    { id: 'scale-geometry',   name: 'Scale & Geometry',         displayOrder: 1 },
    { id: 'light-color',      name: 'Light & Color',            displayOrder: 2 },
    { id: 'optics-focus',     name: 'Optics & Focus',           displayOrder: 3 },
    { id: 'texture-surface',  name: 'Texture & Surface',        displayOrder: 4 },
    { id: 'atmosphere-weather',name: 'Atmosphere & Weather',    displayOrder: 5 },
    { id: 'motion-time',      name: 'Motion & Time',            displayOrder: 6 },
    { id: 'composition-camera',name: 'Composition & Camera',    displayOrder: 7 },
    { id: 'style-medium',     name: 'Style & Medium',           displayOrder: 8 },
    { id: 'materials-patterns',name: 'Materials & Patterns',    displayOrder: 9 },
    { id: 'environment-arch', name: 'Environment & Architecture', displayOrder: 10 },
    { id: 'narrative-tone',   name: 'Narrative & Tone',         displayOrder: 11 },
    { id: 'ui-design',        name: 'UI / Design & Type',       displayOrder: 12 },
    { id: 'game-design',      name: 'Game Design',              displayOrder: 13 },
    { id: 'constraints',      name: 'Constraints & Quality',    displayOrder: 14 },
]

// --- Axes (gradable vs non-gradable) ---
export const AXES = [
    // Scale & Geometry
    { id: 'size',             name: 'Size / Scale',             kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 1 },
    { id: 'quantity',         name: 'Quantity / Density',       kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 2 },
    { id: 'distance',         name: 'Subject Distance',         kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 3 },
    { id: 'framing',          name: 'Framing Width',            kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 4 },
    { id: 'height',           name: 'Height / Elevation',       kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 5 },
    { id: 'depth',            name: 'Depth / Downward',         kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 6 },
    { id: 'length',           name: 'Length / Span',            kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 7 },
    { id: 'width',            name: 'Width / Thickness',        kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 8 },
    { id: 'geometry',         name: 'Geometry / Angularity',    kind: 'gradable',   broaderGroupId: 'scale-geometry', selectionRule: 'single', displayOrder: 9 },

    // Light & Color
    { id: 'brightness',       name: 'Light Level (Brightness)', kind: 'gradable',   broaderGroupId: 'light-color', selectionRule: 'single', displayOrder: 1 },
    { id: 'contrast',         name: 'Contrast',                 kind: 'gradable',   broaderGroupId: 'light-color', selectionRule: 'single', displayOrder: 2 },
    { id: 'saturation',       name: 'Color Saturation',         kind: 'gradable',   broaderGroupId: 'light-color', selectionRule: 'single', displayOrder: 3 },
    { id: 'color-temp',       name: 'Color Temperature',        kind: 'gradable',   broaderGroupId: 'light-color', selectionRule: 'single', displayOrder: 4 },
    { id: 'lighting-uniformity', name: 'Lighting Uniformity',   kind: 'gradable',   broaderGroupId: 'light-color', selectionRule: 'single', displayOrder: 5 },

    // Optics & Focus
    { id: 'sharpness',        name: 'Sharpness / Focus',        kind: 'gradable',   broaderGroupId: 'optics-focus', selectionRule: 'single', displayOrder: 1 },
    { id: 'dof',              name: 'Depth of Field',           kind: 'gradable',   broaderGroupId: 'optics-focus', selectionRule: 'single', displayOrder: 2 },
    { id: 'grain',            name: 'Noise / Grain',            kind: 'gradable',   broaderGroupId: 'optics-focus', selectionRule: 'single', displayOrder: 3 },
    { id: 'resolution',       name: 'Resolution / Detail',      kind: 'gradable',   broaderGroupId: 'optics-focus', selectionRule: 'single', displayOrder: 4 },
    { id: 'pixel-fidelity',   name: 'Pixel Fidelity',           kind: 'nonGradable',broaderGroupId: 'optics-focus', selectionRule: 'multi',  displayOrder: 5 },
    { id: 'detail-distribution', name: 'Detail Distribution',   kind: 'gradable',   broaderGroupId: 'optics-focus', selectionRule: 'single', displayOrder: 6 },

    // Texture & Surface
    { id: 'complexity',       name: 'Complexity / Ornament',    kind: 'gradable',   broaderGroupId: 'texture-surface', selectionRule: 'single', displayOrder: 1 },
    { id: 'surface-finish',   name: 'Surface Finish (Reflectivity)', kind: 'gradable', broaderGroupId: 'texture-surface', selectionRule: 'single', displayOrder: 2 },
    { id: 'surface-rough',    name: 'Surface Roughness (Texture)', kind: 'gradable',   broaderGroupId: 'texture-surface', selectionRule: 'single', displayOrder: 3 },
    { id: 'transparency',     name: 'Transparency / Opacity',   kind: 'gradable',   broaderGroupId: 'texture-surface', selectionRule: 'single', displayOrder: 4 },
    { id: 'wetness',          name: 'Wetness / Moisture',       kind: 'gradable',   broaderGroupId: 'texture-surface', selectionRule: 'single', displayOrder: 5 },
    { id: 'cleanliness',      name: 'Cleanliness / Decay',      kind: 'gradable',   broaderGroupId: 'texture-surface', selectionRule: 'single', displayOrder: 6 },

    // Atmosphere & Weather
    { id: 'atmo-density',     name: 'Atmospheric Density',      kind: 'gradable',   broaderGroupId: 'atmosphere-weather', selectionRule: 'single', displayOrder: 1 },
    { id: 'smoke',            name: 'Smoke / Particulate',      kind: 'gradable',   broaderGroupId: 'atmosphere-weather', selectionRule: 'single', displayOrder: 2 },
    { id: 'weather',          name: 'Weather Severity',         kind: 'gradable',   broaderGroupId: 'atmosphere-weather', selectionRule: 'single', displayOrder: 3 },

    // Motion & Time
    { id: 'weight-look',      name: 'Weight / Mass (Look)',     kind: 'gradable',   broaderGroupId: 'motion-time', selectionRule: 'single', displayOrder: 1 },
    { id: 'speed',            name: 'Speed / Motion',           kind: 'gradable',   broaderGroupId: 'motion-time', selectionRule: 'single', displayOrder: 2 },
    { id: 'age',              name: 'Time / Age',               kind: 'gradable',   broaderGroupId: 'motion-time', selectionRule: 'single', displayOrder: 3 },
    { id: 'duration',         name: 'Duration',                 kind: 'gradable',   broaderGroupId: 'motion-time', selectionRule: 'single', displayOrder: 4 },
    { id: 'temperature',      name: 'Temperature',              kind: 'gradable',   broaderGroupId: 'motion-time', selectionRule: 'single', displayOrder: 5 },
    { id: 'motion-blur',      name: 'Motion Blur',              kind: 'gradable',   broaderGroupId: 'motion-time', selectionRule: 'single', displayOrder: 6 },
    { id: 'sound',            name: 'Sound Presence (Visual Cue)', kind: 'gradable',   broaderGroupId: 'motion-time', selectionRule: 'single', displayOrder: 7 },

    // Composition & Camera
    { id: 'vantage',          name: 'Vantage / Angle',          kind: 'gradable',   broaderGroupId: 'composition-camera', selectionRule: 'single', displayOrder: 1 },
    { id: 'horizontal-angle', name: 'Horizontal Angle (Yaw)',   kind: 'gradable',   broaderGroupId: 'composition-camera', selectionRule: 'single', displayOrder: 2 },
    { id: 'vertical-angle',   name: 'Vertical Angle (Pitch)',   kind: 'gradable',   broaderGroupId: 'composition-camera', selectionRule: 'single', displayOrder: 3 },
    { id: 'focal-feel',       name: 'Focal Feel (no numbers)',  kind: 'nonGradable',broaderGroupId: 'composition-camera', selectionRule: 'single', displayOrder: 4 },
    { id: 'composition',      name: 'Composition Bias',         kind: 'nonGradable',broaderGroupId: 'composition-camera', selectionRule: 'multi',  displayOrder: 5 },
    { id: 'background',       name: 'Background Treatment',     kind: 'nonGradable',broaderGroupId: 'composition-camera', selectionRule: 'multi',  displayOrder: 6 },
    { id: 'camera-move',      name: 'Camera Movement Feel',     kind: 'gradable',   broaderGroupId: 'composition-camera', selectionRule: 'single', displayOrder: 7 },
    { id: 'fgbg',             name: 'Foreground/Background Balance', kind: 'gradable', broaderGroupId: 'composition-camera', selectionRule: 'single', displayOrder: 8 },
    { id: 'compositional-uniformity', name: 'Compositional Uniformity', kind: 'gradable', broaderGroupId: 'composition-camera', selectionRule: 'single', displayOrder: 9 },


    // Style & Medium
    { id: 'style-photographic', name: 'Photographic Look',      kind: 'nonGradable', broaderGroupId: 'style-medium', selectionRule: 'multi', displayOrder: 1 },
    { id: 'style-lighting',     name: 'Lighting Pattern',         kind: 'nonGradable', broaderGroupId: 'style-medium', selectionRule: 'multi', displayOrder: 2 },
    { id: 'style-art',          name: 'Art Movement',             kind: 'nonGradable', broaderGroupId: 'style-medium', selectionRule: 'multi', displayOrder: 3 },
    { id: 'style-illustration', name: 'Illustration / Render',  kind: 'nonGradable', broaderGroupId: 'style-medium', selectionRule: 'multi', displayOrder: 4 },
    { id: 'style-3d',           name: '3D / CG Style',          kind: 'nonGradable', broaderGroupId: 'style-medium', selectionRule: 'multi', displayOrder: 5 },
    { id: 'film-stock',         name: 'Film / Stock Feel',        kind: 'nonGradable', broaderGroupId: 'style-medium', selectionRule: 'multi', displayOrder: 6 },

    // Materials & Patterns
    { id: 'materials',        name: 'Material Looks',           kind: 'nonGradable', broaderGroupId: 'materials-patterns', selectionRule: 'multi', displayOrder: 1 },
    { id: 'patterns',         name: 'Pattern / Repetition',     kind: 'nonGradable', broaderGroupId: 'materials-patterns', selectionRule: 'multi', displayOrder: 2 },

    // Environment & Architecture
    { id: 'setting-scale',    name: 'Setting Scale (World Size)', kind: 'gradable',   broaderGroupId: 'environment-arch', selectionRule: 'single', displayOrder: 1 },
    { id: 'environment',      name: 'Environment Type',         kind: 'nonGradable',broaderGroupId: 'environment-arch', selectionRule: 'multi', displayOrder: 2 },
    { id: 'arch-style',       name: 'Architecture / Scale',     kind: 'nonGradable',broaderGroupId: 'environment-arch', selectionRule: 'multi', displayOrder: 3 },
    { id: 'megastructures',   name: 'Megastructure Types',      kind: 'nonGradable',broaderGroupId: 'environment-arch', selectionRule: 'multi', displayOrder: 4 },

    // Narrative & Tone
    { id: 'energy',           name: 'Energy / Action',          kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 1 },
    { id: 'threat',           name: 'Threat / Danger',          kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 2 },
    { id: 'mood',             name: 'Mood / Feelings',          kind: 'nonGradable',broaderGroupId: 'narrative-tone', selectionRule: 'multi',  displayOrder: 3 },
    { id: 'narrative',        name: 'Narrative Tone',           kind: 'nonGradable',broaderGroupId: 'narrative-tone', selectionRule: 'multi',  displayOrder: 4 },
    { id: 'crowd',            name: 'Crowd Emotion',            kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 5 },
    { id: 'luxury',           name: 'Luxury / Costliness',      kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 6 },
    { id: 'rarity',           name: 'Rarity',                   kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 7 },
    { id: 'realism',          name: 'Realism / Abstraction',    kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 8 },
    { id: 'minmax',           name: 'Minimalism → Maximalism',    kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 9 },
    { id: 'creature-scale',   name: 'Creature Scale & Presence',  kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 10 },
    { id: 'action-pose',      name: 'Action Pose Intensity',    kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 11 },
    { id: 'env-fx',           name: 'Env FX Intensity',         kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 12 },
    { id: 'chaos',            name: 'Chaos / Randomness',       kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 13 },
    { id: 'reality-bend',     name: 'Reality Bend (Surreal)',   kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 14 },
    { id: 'glitch',           name: 'Error / Glitch Aesthetic', kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 15 },
    { id: 'visceral',         name: 'Visceral / Gore (safe range)',kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 16 },
    { id: 'humor',            name: 'Humor Tone',               kind: 'gradable',   broaderGroupId: 'narrative-tone', selectionRule: 'single', displayOrder: 17 },
    { id: 'symbolic',         name: 'Symbolic Tones',           kind: 'nonGradable',broaderGroupId: 'narrative-tone', selectionRule: 'multi',  displayOrder: 18 },

    // UI / Design & Type (use when prompts include UI or text)
    { id: 'tech-ui',          name: 'Tech Readability (UI/UX)', kind: 'nonGradable',broaderGroupId: 'ui-design', selectionRule: 'single', displayOrder: 1 },
    { id: 'icon-style',       name: 'Iconographic Styles',      kind: 'nonGradable',broaderGroupId: 'ui-design', selectionRule: 'multi',  displayOrder: 2 },
    { id: 'type-vibe',        name: 'Typographic Vibes',        kind: 'nonGradable',broaderGroupId: 'ui-design', selectionRule: 'multi',  displayOrder: 3 },

    // Game Design
    { id: 'game-view',        name: 'Game Perspective / View',  kind: 'nonGradable', broaderGroupId: 'game-design', selectionRule: 'single', displayOrder: 1 },
    { id: 'game-art-style',   name: 'Game Art Style',           kind: 'nonGradable', broaderGroupId: 'game-design', selectionRule: 'multi',  displayOrder: 2 },
    { id: 'game-elements',    name: 'Game Elements / Assets',   kind: 'nonGradable', broaderGroupId: 'game-design', selectionRule: 'multi',  displayOrder: 3 },

    // Constraints & Quality
    { id: 'negations',        name: 'Negations / Constraints',  kind: 'nonGradable', broaderGroupId: 'constraints', selectionRule: 'multi', displayOrder: 1 },
    { id: 'quality',          name: 'Quality Targets',          kind: 'nonGradable', broaderGroupId: 'constraints', selectionRule: 'multi', displayOrder: 2 },
    { id: 'color-mood',       name: 'Color Moods',              kind: 'nonGradable', broaderGroupId: 'constraints', selectionRule: 'multi', displayOrder: 3 },
]

// --- Gradable chains ---
export const CHAINS = [
    // Scale & Geometry
    {
        id: 'chain-size',
        axisId: 'size',
        termIds: [
            'microscopic','minuscule', 'minute', 'miniature',
            'tiny','small','medium-size','large','huge','gigantic','colossal','megastructural'
        ],
        defaultIndex: 6 // was 2; still selects 'medium-size'
    },    { id: 'chain-quantity', axisId: 'quantity', termIds: ['single','few','several','many','numerous','abundant','teeming','swarming'], defaultIndex: 3 },
    { id: 'chain-distance', axisId: 'distance', termIds: ['touching','near','mid-distance','far','distant','remote','horizon-distant'], defaultIndex: 2 },
    { id: 'chain-framing', axisId: 'framing', termIds: ['close-up','tight-shot','medium-shot','wide-shot','ultra-wide-shot','panoramic','aerial','orbital'], defaultIndex: 2 },
    { id: 'chain-height', axisId: 'height', termIds: ['low-lying','short','tall','very-tall','towering','soaring','sky-high'], defaultIndex: 2 },
    { id: 'chain-depth', axisId: 'depth', termIds: ['shallow','moderate-depth','deep','very-deep','abyssal','bottomless'], defaultIndex: 2 },
    { id: 'chain-length', axisId: 'length', termIds: ['short','mid-length','long','very-long','elongated','interminable'], defaultIndex: 2 },
    { id: 'chain-width', axisId: 'width', termIds: ['thin','slender','moderate-width','broad','wide','ultra-wide-width','expansive'], defaultIndex: 2 },
    { id: 'chain-geometry', axisId: 'geometry', termIds: ['rounded','soft-edged','gently-faceted','angular','sharp-edged','knife-edged'], defaultIndex: 2 },

    // Light & Color
    { id: 'chain-brightness', axisId: 'brightness', termIds: ['dark','dim','soft-lit','balanced-light','bright','very-bright','dazzling','blinding'], defaultIndex: 3 },
    { id: 'chain-contrast',   axisId: 'contrast',   termIds: ['flat','low-contrast','balanced-contrast','punchy','high-contrast','stark','extreme-contrast','chiaroscuro'], defaultIndex: 2 },
    { id: 'chain-saturation', axisId: 'saturation', termIds: ['monochrome','desaturated','muted','natural','vivid','saturated','hyper-saturated','neon'], defaultIndex: 3 },
    { id: 'chain-color-temp', axisId: 'color-temp', termIds: ['icy-cool','cool','neutral','warm','golden','amber','fiery'], defaultIndex: 3 },
    { id: 'chain-lighting-uniformity', axisId: 'lighting-uniformity', termIds: ['dramatic-lighting','directional-light','diffuse-light','flat-lighting','perfectly-even-light'], defaultIndex: 2 },

    // Optics & Focus
    { id: 'chain-sharpness', axisId: 'sharpness', termIds: ['blurry','soft-focus','crisp','sharp','razor-sharp','tack-sharp','hyper-sharp'], defaultIndex: 3 },
    { id: 'chain-dof',       axisId: 'dof',       termIds: ['deep-dof','moderate-dof','shallow-dof','very-shallow-dof','razor-thin','bokeh-heavy'], defaultIndex: 1 },
    { id: 'chain-grain',     axisId: 'grain',     termIds: ['grain-free','subtle-grain','light-grain','noticeable-grain','gritty','heavy-grain','noisy'], defaultIndex: 1 },
    { id: 'chain-resolution',axisId: 'resolution',termIds: ['simple-shapes','low-detail','clean-detail','detailed','highly-detailed','intricate','ultra-detailed','micro-detail'], defaultIndex: 3 },
    { id: 'chain-detail-distribution', axisId: 'detail-distribution', termIds: ['vignetted-detail','center-focused-detail','even-detail-distribution','uniform-edge-to-edge-detail'], defaultIndex: 2 },

    // Texture & Surface
    { id: 'chain-complexity',     axisId: 'complexity',     termIds: ['minimal','simple','orderly','balanced-detail','detailed','ornate','baroque','maximalist'], defaultIndex: 2 },
    { id: 'chain-surface-finish', axisId: 'surface-finish', termIds: ['matte','eggshell','satin','semi-gloss','glossy','high-gloss','mirrorlike'], defaultIndex: 2 },
    { id: 'chain-surface-rough',  axisId: 'surface-rough',  termIds: ['glass-smooth','smooth','fine-grained','lightly-textured','textured','rough','coarse','jagged'], defaultIndex: 2 },
    { id: 'chain-transparency',   axisId: 'transparency',   termIds: ['opaque','semi-opaque','translucent','semi-transparent','transparent','crystal-clear'], defaultIndex: 2 },
    { id: 'chain-wetness',        axisId: 'wetness',        termIds: ['dry','slightly-damp','damp','wet','soaked','saturated','drenched','dripping'], defaultIndex: 2 },
    { id: 'chain-cleanliness',    axisId: 'cleanliness',    termIds: ['pristine','spotless','clean-surface','slightly-worn','weathered','grimy','filthy','decayed','decrepit'], defaultIndex: 2 },

    // Atmosphere & Weather
    { id: 'chain-atmo-density', axisId: 'atmo-density', termIds: ['clear-atmosphere','light-haze','hazy','misty','foggy','dense-fog','whiteout'], defaultIndex: 1 },
    { id: 'chain-smoke',        axisId: 'smoke',        termIds: ['trace','wispy','light-smoke','moderate-smoke','thick-smoke','choking','opaque-smoke'], defaultIndex: 2 },
    { id: 'chain-weather',      axisId: 'weather',      termIds: ['calm','breezy','windy','gale','stormy','severe-storm','violent','cataclysmic'], defaultIndex: 2 },

    // Motion & Time
    { id: 'chain-weight-look', axisId: 'weight-look', termIds: ['featherlight','light-weight','moderate-weight','heavy-weight','hefty','massive','ponderous'], defaultIndex: 2 },
    { id: 'chain-speed',       axisId: 'speed',       termIds: ['static','slow','moderate-speed','fast','very-fast','high-speed','supersonic','hypersonic'], defaultIndex: 2 },
    { id: 'chain-age',         axisId: 'age',         termIds: ['brand-new','recent','contemporary','weathered-age','old','antique','ancient','timeworn'], defaultIndex: 2 },
    { id: 'chain-duration',    axisId: 'duration',    termIds: ['instant','brief','short-duration','moderate-duration','prolonged','extended','enduring'], defaultIndex: 3 },
    { id: 'chain-temperature', axisId: 'temperature', termIds: ['freezing','cold','cool','neutral-temp','warm','hot','scorching','searing'], defaultIndex: 3 },
    { id: 'chain-motion-blur', axisId: 'motion-blur', termIds: ['no-motion-blur','slight-blur','moderate-blur','pronounced-blur','heavy-blur','extreme-blur','streaking'], defaultIndex: 1 },
    { id: 'chain-sound',       axisId: 'sound',       termIds: ['silent','quiet','gentle-sound','humming','noisy','loud','deafening'], defaultIndex: 2 },

    // Composition & Camera
    { id: 'chain-vantage',     axisId: 'vantage',     termIds: ['eye-level','low-angle','worms-eye','high-angle','birds-eye','top-down','dimetric-isometric','oblique'], defaultIndex: 0 },
    { id: 'chain-horizontal-angle', axisId: 'horizontal-angle', termIds: ['h-angle-0', 'h-angle-22', 'h-angle-45', 'h-angle-67', 'h-angle-90'], defaultIndex: 0 },
    { id: 'chain-vertical-angle', axisId: 'vertical-angle', termIds: ['v-angle-0', 'v-angle-26-6', 'v-angle-35-3', 'v-angle-45', 'v-angle-90'], defaultIndex: 0 },
    { id: 'chain-camera-move', axisId: 'camera-move', termIds: ['locked-off','slight-drift','slow-pan','tracking','dolly-zoom','whip-pan','chaotic-handheld'], defaultIndex: 2 },
    { id: 'chain-fgbg',        axisId: 'fgbg',        termIds: ['foreground-dominant','balanced-layers','background-dominant','deep-layered'], defaultIndex: 1 },
    { id: 'chain-compositional-uniformity', axisId: 'compositional-uniformity', termIds: ['highly-varied-composition','varied-composition','balanced-elements','uniform-composition','monotonous'], defaultIndex: 2 },

    // Environment & Architecture
    { id: 'chain-setting-scale', axisId: 'setting-scale', termIds: ['macro','close-up','miniature-set','room-scale','building-scale','city-scale','regional-scale','planetary-scale','megastructural-scale'], defaultIndex: 3 },

    // Narrative & Tone
    { id: 'chain-energy',         axisId: 'energy',         termIds: ['still','poised','active','dynamic','high-energy','frenetic','explosive'], defaultIndex: 2 },
    { id: 'chain-threat',         axisId: 'threat',         termIds: ['harmless','mild-threat','uneasy','ominous','menacing','dangerous','lethal','apocalyptic'], defaultIndex: 2 },
    { id: 'chain-crowd',          axisId: 'crowd',          termIds: ['subdued','relaxed','upbeat','lively','festive','raucous','chaotic'], defaultIndex: 2 },
    { id: 'chain-luxury',         axisId: 'luxury',         termIds: ['humble','modest','practical','upscale','luxurious','opulent','palatial'], defaultIndex: 2 },
    { id: 'chain-rarity',         axisId: 'rarity',         termIds: ['common','ordinary','uncommon','rare','very-rare','unique','singular','one-of-a-kind'], defaultIndex: 3 },
    { id: 'chain-realism',        axisId: 'realism',        termIds: ['photorealistic','realistic','stylized','illustrative','painterly','surreal','abstract','non-representational'], defaultIndex: 1 },
    { id: 'chain-minmax',         axisId: 'minmax',         termIds: ['ultra-minimal','minimal','sparse','balanced-composition','rich-composition','full-composition','maximal','hyper-maximal'], defaultIndex: 3 },
    { id: 'chain-creature-scale', axisId: 'creature-scale', termIds: ['diminutive','small','imposing','massive','colossal','world-scale'], defaultIndex: 2 },
    { id: 'chain-action-pose',    axisId: 'action-pose',    termIds: ['neutral-stance','relaxed-pose','dynamic-pose','power-pose','extreme-action','airborne'], defaultIndex: 2 },
    { id: 'chain-env-fx',         axisId: 'env-fx',         termIds: ['subtle-bloom','bloom','heavy-bloom','lens-flare','heavy-flare','god-rays','volumetric-beams'], defaultIndex: 1 },
    { id: 'chain-chaos',          axisId: 'chaos',          termIds: ['orderly','mild-randomness','varied','chaotic','highly-chaotic','entropic'], defaultIndex: 2 },
    { id: 'chain-reality-bend',   axisId: 'reality-bend',   termIds: ['plausible-twist','unlikely','surreal','dreamlike','uncanny','impossible','reality-breaking'], defaultIndex: 2 },
    { id: 'chain-glitch',         axisId: 'glitch',         termIds: ['no-glitch','subtle-glitch','datamosh','heavy-glitch','corrupted-data','broken-image'], defaultIndex: 1 },
    { id: 'chain-visceral',       axisId: 'visceral',       termIds: ['non-visceral','gritty','grim','grimdark','macabre'], defaultIndex: 1 },
    { id: 'chain-humor',          axisId: 'humor',          termIds: ['serious-tone','dry','witty','playful','goofy','absurdist','slapstick'], defaultIndex: 2 },
]

// --- Terms (non-gradable + gradable members mirror chain ids) ---
export const TERMS = [
    // Size / Scale
    { id: 'microscopic',axisId: 'size', label: 'microscopic',kind: 'gradableMember' }, // NEW
    { id: 'minuscule',  axisId: 'size', label: 'minuscule',  kind: 'gradableMember' }, // NEW
    { id: 'minute',     axisId: 'size', label: 'minute',     kind: 'gradableMember' }, // NEW
    { id: 'miniature',  axisId: 'size', label: 'miniature',  kind: 'gradableMember' }, // NEW

    { id: 'tiny',       axisId: 'size', label: 'tiny',       kind: 'gradableMember' },
    { id: 'small',      axisId: 'size', label: 'small',      kind: 'gradableMember' },
    { id: 'medium-size',axisId: 'size', label: 'medium size',kind: 'gradableMember' },
    { id: 'large',      axisId: 'size', label: 'large',      kind: 'gradableMember' },
    { id: 'huge',       axisId: 'size', label: 'huge',       kind: 'gradableMember' },
    { id: 'gigantic',   axisId: 'size', label: 'gigantic',   kind: 'gradableMember' },
    { id: 'colossal',   axisId: 'size', label: 'colossal',   kind: 'gradableMember' },
    { id: 'megastructural', axisId: 'size', label: 'megastructural', kind: 'gradableMember' },
    // Quantity / Density
    ...['single','few','several','many','numerous','abundant','teeming','swarming'].map(x=>({ id:x, axisId:'quantity', label:x, kind:'gradableMember'})),

    // Distance & Framing
    ...['touching','near','mid-distance','far','distant','remote','horizon-distant'].map(x=>({ id:x, axisId:'distance', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['close-up','tight-shot','medium-shot','wide-shot','ultra-wide-shot','panoramic','aerial','orbital'].map(x=>({ id:x, axisId:'framing', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Height / Depth / Length / Width / Geometry
    ...['low-lying','short','tall','very-tall','towering','soaring','sky-high'].map(x=>({ id:x, axisId:'height', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['shallow','moderate-depth','deep','very-deep','abyssal','bottomless'].map(x=>({ id:x, axisId:'depth', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['short','mid-length','long','very-long','elongated','interminable'].map(x => {
        let label = x.replace('-', ' ');
        if (['short', 'long', 'very long'].includes(label)) {
            label += ' length'; // Append context to avoid ambiguity
        }
        return { id: x, axisId: 'length', label, kind: 'gradableMember' };
    }),
    ...['thin','slender','moderate-width','broad','wide','ultra-wide-width','expansive'].map(x=>({ id:x, axisId:'width', label:x.replace('-width',' width').replace('-', ' '), kind:'gradableMember'})),
    ...['rounded','soft-edged','gently-faceted','angular','sharp-edged','knife-edged'].map(x=>({ id:x, axisId:'geometry', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Light & Color
    ...['dark','dim','soft-lit','balanced-light','bright','very-bright','dazzling','blinding'].map(x=>({ id:x, axisId:'brightness', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['flat','low-contrast','balanced-contrast','punchy','high-contrast','stark','extreme-contrast','chiaroscuro'].map(x => {
        let label = x.replace('-', ' ');
        if (['flat', 'punchy', 'stark'].includes(x)) {
            label += ' contrast';
        }
        return { id: x, axisId: 'contrast', label, kind: 'gradableMember' };
    }),
    ...['monochrome','desaturated','muted','natural','vivid','saturated','hyper-saturated','neon'].map(x => ({
        id: x,
        axisId: 'saturation',
        kind: 'gradableMember',
        label: ({
            'monochrome':       'monochrome (no color; 0% color saturation)',
            'desaturated':      'desaturated color saturation (very low)',
            'muted':            'muted color saturation (subdued)',
            'natural':          'natural color saturation (true-to-life)',
            'vivid':            'vivid color saturation (high)',
            'saturated':        'saturated color saturation (very high)',
            'hyper-saturated':  'hyper-saturated color saturation (extreme)',
            'neon':             'neon color saturation (extreme, glowing)'
        })[x]
    })),    ...['icy-cool','cool','neutral','warm','golden','amber','fiery'].map(x => ({
        id: x,
        axisId: 'color-temp',
        kind: 'gradableMember',
        label: ({
            'icy-cool': 'icy-cool color temperature (bluish)',
            'cool':     'cool color temperature',
            'neutral':  'neutral white balance (no tint)',
            'warm':     'warm color temperature',
            'golden':   'golden-hour warm color temperature',
            'amber':    'amber warm color temperature',
            'fiery':    'fiery warm color temperature (reddish)'
        })[x]
    })),
    ...['dramatic-lighting','directional-light','diffuse-light','flat-lighting','perfectly-even-light'].map(x=>({ id:x, axisId:'lighting-uniformity', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Optics & Focus
    ...['blurry','soft-focus','crisp','sharp','razor-sharp','tack-sharp','hyper-sharp'].map(x=>({ id:x, axisId:'sharpness', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['deep-dof','moderate-dof','shallow-dof','very-shallow-dof','razor-thin','bokeh-heavy'].map(x=>({ id:x, axisId:'dof', label: x.includes('-dof') ? x.replace('-dof', ' DOF').replace('-', ' ') : x.replace('-', ' '), kind:'gradableMember'})),
    ...['grain-free','subtle-grain','light-grain','noticeable-grain','gritty','heavy-grain','noisy'].map(x=>({ id:x, axisId:'grain', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['simple-shapes','low-detail','clean-detail','detailed','highly-detailed','intricate','ultra-detailed','micro-detail'].map(x=>({ id:x, axisId:'resolution', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['pixel-perfect','anti-aliased','crisp pixels','subpixel rendering'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'pixel-fidelity', label:x, kind:'nonGradable'})),
    ...['vignetted-detail','center-focused-detail','even-detail-distribution','uniform-edge-to-edge-detail'].map(x=>({ id:x, axisId:'detail-distribution', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Texture & Surface
    ...['minimal','simple','orderly','balanced-detail','detailed','ornate','baroque','maximalist'].map(x=>({ id:x, axisId:'complexity', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['matte','eggshell','satin','semi-gloss','glossy','high-gloss','mirrorlike'].map(x=>({ id:x, axisId:'surface-finish', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['glass-smooth','smooth','fine-grained','lightly-textured','textured','rough','coarse','jagged'].map(x=>({ id:x, axisId:'surface-rough', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['opaque','semi-opaque','translucent','semi-transparent','transparent','crystal-clear'].map(x=>({ id:x, axisId:'transparency', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['dry','slightly-damp','damp','wet','soaked','saturated','drenched','dripping'].map(x=>({ id:x, axisId:'wetness', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['pristine','spotless','clean-surface','slightly-worn','weathered','grimy','filthy','decayed','decrepit'].map(x=>({ id:x, axisId:'cleanliness', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Atmosphere & Weather
    ...['clear-atmosphere','light-haze','hazy','misty','foggy','dense-fog','whiteout'].map(x=>({ id:x, axisId:'atmo-density', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['trace','wispy','light-smoke','moderate-smoke','thick-smoke','choking','opaque-smoke'].map(x=>({ id:x, axisId:'smoke', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['calm','breezy','windy','gale','stormy','severe-storm','violent','cataclysmic'].map(x=>({ id:x, axisId:'weather', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Motion & Time
    ...['featherlight','light-weight','moderate-weight','heavy-weight','hefty','massive','ponderous'].map(x=>({ id:x, axisId:'weight-look', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['static','slow','moderate-speed','fast','very-fast','high-speed','supersonic','hypersonic'].map(x=>({ id:x, axisId:'speed', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['brand-new','recent','contemporary','weathered-age','old','antique','ancient','timeworn'].map(x=>({ id:x, axisId:'age', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['instant','brief','short-duration','moderate-duration','prolonged','extended','enduring'].map(x=>({ id:x, axisId:'duration', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['freezing','cold','cool','neutral-temp','warm','hot','scorching','searing'].map(x=>({ id:x, axisId:'temperature', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['no-motion-blur','slight-blur','moderate-blur','pronounced-blur','heavy-blur','extreme-blur','streaking'].map(x=>({ id:x, axisId:'motion-blur', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['silent','quiet','gentle-sound','humming','noisy','loud','deafening'].map(x=>({ id:x, axisId:'sound', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Style & Medium (non-gradable terms)
    ...['cinematic','film still','editorial','studio','documentary','street','lifestyle','product','macro','astrophotography','HDR','long-exposure','tilt-shift','infrared','lomography','Polaroid','wet-plate'].map(x=>({ id: x.toLowerCase().replace(/\s+/g,'-'), axisId:'style-photographic', label:x, kind:'nonGradable'})),
    // MODIFIED: Added 'uniform ambient lighting', 'Wraparound Light', and 'Diffuse Lighting' here.
    ...['softbox','Rembrandt','butterfly','split-light','loop-light','rim-light','backlit','hard light','chiaroscuro', 'uniform ambient lighting', 'Wraparound Light', 'Diffuse Lighting'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'style-lighting', label:x, kind:'nonGradable'})),
    ...['academic art','baroque','neoclassicism','pre-raphaelite brotherhood','realism','art nouveau','impressionism','expressionism','constructivism','cubism','futurism','surrealism','abstract expressionism','minimalism','brutalism','postmodernism','vaporwave','synthwave','cyberpunk','solarpunk','biopunk','8-bit aesthetic','16-bit aesthetic','retro gaming style'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'style-art', label:x, kind:'nonGradable'})),
    ...['vector','flat','cel-shaded','comic','manga','painterly','watercolor','gouache','oil-painted','impasto','inked','stippled','woodcut','lithograph','etching'].map(x=>({ id:x.toLowerCase(), axisId:'style-illustration', label:x, kind:'nonGradable'})),
    ...['photoreal PBR','octane-style','cycles-style','redshift-style','arnold-style','UE5 real-time','voxel','low-poly','clay render','wireframe'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'style-3d', label:x, kind:'nonGradable'})),
    ...['Kodak Portra','Kodak Ektar','Fuji Provia','Fuji Velvia','Ilford HP5','Cinestill 800T','Agfa Vista'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'film-stock', label:x, kind:'nonGradable'})),

    // Materials & Patterns
    ...['ceramic','porcelain','glass','chrome','brushed metal','anodized','carbon fiber','concrete','stone','marble','wood','leather','fabric','velvet','latex','rubber'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'materials', label:x, kind:'nonGradable'})),
    ...['plain','subtle pattern','repeating','tessellated','fractal','recursive','kaleidoscopic','seamlessly tileable','repeating background','tileable sprite','wraparound design','matching edges','horizontally seamless','vertically seamless','geometric tessellation'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'patterns', label:x, kind:'nonGradable'})),

    // Composition & Camera specifics
    ...[
        { id: 'eye-level', label: 'eye-level' },
        { id: 'low-angle', label: 'low-angle' },
        { id: 'worms-eye', label: "worm's-eye" },
        { id: 'high-angle', label: 'high-angle' },
        { id: 'birds-eye', label: "bird's-eye" },
        { id: 'top-down', label: 'top-down' },
        { id: 'dimetric-isometric', label: 'dimetric (2:1)' },
        { id: 'oblique', label: 'oblique' }
    ].map(t => ({ ...t, axisId: 'vantage', kind: 'gradableMember' })),
    ...[
        { id: 'h-angle-0', label: 'front view, 0° yaw' },
        { id: 'h-angle-22', label: 'off-center view, 22.5° yaw' },
        { id: 'h-angle-45', label: 'three-quarter view, 45° yaw' },
        { id: 'h-angle-67', label: 'dramatic three-quarter view, 67.5° yaw' },
        { id: 'h-angle-90', label: 'profile view, 90° yaw' }
    ].map(t => ({ ...t, axisId: 'horizontal-angle', kind: 'gradableMember' })),
    ...[
        { id: 'v-angle-0',    label: 'eye-level view, 0° pitch' },
        { id: 'v-angle-26-6', label: 'slight high-angle, 26.6° pitch' },
        { id: 'v-angle-35-3', label: 'isometric view, 35.3° pitch' },
        { id: 'v-angle-45',   label: 'high-angle view, 45° pitch' },
        { id: 'v-angle-90',   label: 'top-down view, 90° pitch' }
    ].map(t => ({ ...t, axisId: 'vertical-angle', kind: 'gradableMember' })),
    ...['ultra-wide','wide','standard','short-tele','telephoto','super-tele'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'focal-feel', label:x, kind:'nonGradable'})),
    ...['centered','rule-of-thirds','golden-ratio','leading lines','symmetrical','radial','layered','collage'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'composition', label:x, kind:'nonGradable'})),
    ...['seamless','clean backdrop','gradient','vignette','textured wall','environment-rich','deep scene'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'background', label:x, kind:'nonGradable'})),
    ...['locked-off','slight drift','slow pan','tracking','dolly zoom','whip-pan','chaotic handheld'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'camera-move', label:x, kind:'gradableMember'})),
    ...['foreground-dominant','balanced layers','background-dominant','deep layered'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'fgbg', label:x, kind:'gradableMember'})),
    ...['highly-varied-composition','varied-composition','balanced-elements','uniform-composition','monotonous'].map(x=>({ id:x, axisId:'compositional-uniformity', label:x.replace('-', ' '), kind:'gradableMember'})),

    // Environment & Architecture
    ...['macro','close-up','miniature-set','room-scale','building-scale','city-scale','regional-scale','planetary-scale','megastructural-scale'].map(x=>({ id:x, axisId:'setting-scale', label:x.replace('-', ' '), kind:'gradableMember'})),
    ...['studio','interior','street','alley','market','plaza','forest','desert','tundra','coastline','canyon','swamp','cave','ruins','megacity','orbital station','ringworld rim'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'environment', label:x, kind:'nonGradable'})),
    ...['brutalist','high-tech','parametric','biomimetic','arcology','ringworld','Dyson-swarm',"O'Neill cylinder",'Stanford torus','skybridge megastructure'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-').replace(/'/g,''), axisId:'arch-style', label:x, kind:'nonGradable'})),
    ...['arcology','megatower','orbital elevator','skybridge network','ring megacity',"O'Neill cylinder",'Stanford torus','Dyson swarm','partial Dyson shell','Matrioshka brain'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-').replace(/'/g,''), axisId:'megastructures', label:x, kind:'nonGradable'})),

    // Narrative & Tone (gradable members)
    ...['still','poised','active','dynamic','high-energy','frenetic','explosive'].map(x=>({ id:x, axisId:'energy', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['harmless','mild-threat','uneasy','ominous','menacing','dangerous','lethal','apocalyptic'].map(x=>({ id:x, axisId:'threat', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['subdued','relaxed','upbeat','lively','festive','raucous','chaotic'].map(x=>({ id:x, axisId:'crowd', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['humble','modest','practical','upscale','luxurious','opulent','palatial'].map(x=>({ id:x, axisId:'luxury', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['common','ordinary','uncommon','rare','very-rare','unique','singular','one-of-a-kind'].map(x=>({ id:x, axisId:'rarity', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['photorealistic','realistic','stylized','illustrative','painterly','surreal','abstract','non-representational'].map(x=>({ id:x, axisId:'realism', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['ultra-minimal','minimal','sparse','balanced-composition','rich-composition','full-composition','maximal','hyper-maximal'].map(x=>({ id:x, axisId:'minmax', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['diminutive','small','imposing','massive','colossal','world-scale'].map(x=>({ id:x, axisId:'creature-scale', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['neutral-stance','relaxed-pose','dynamic-pose','power-pose','extreme-action','airborne'].map(x=>({ id:x, axisId:'action-pose', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['subtle-bloom','bloom','heavy-bloom','lens-flare','heavy-flare','god-rays','volumetric-beams'].map(x=>({ id:x, axisId:'env-fx', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['orderly','mild-randomness','varied','chaotic','highly-chaotic','entropic'].map(x=>({ id:x, axisId:'chaos', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['plausible-twist','unlikely','surreal','dreamlike','uncanny','impossible','reality-breaking'].map(x=>({ id:x, axisId:'reality-bend', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['no-glitch','subtle-glitch','datamosh','heavy-glitch','corrupted-data','broken-image'].map(x=>({ id:x, axisId:'glitch', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['non-visceral','gritty','grim','grimdark','macabre'].map(x=>({ id:x, axisId:'visceral', label:x.replace(/-/g, ' '), kind:'gradableMember'})),
    ...['serious-tone','dry','witty','playful','goofy','absurdist','slapstick'].map(x=>({ id:x, axisId:'humor', label:x.replace(/-/g, ' '), kind:'gradableMember'})),

    // Narrative & Tone (non-gradable)
    ...['serene','calm','gentle','hopeful','lively','energetic','intense','dramatic','turbulent','cozy','nostalgic','melancholic','mysterious','eerie','ominous','terrifying','awe-struck'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'mood', label:x, kind:'nonGradable'})),
    ...['wholesome','playful','adventurous','mysterious','ominous','catastrophic','post-apocalyptic','hopeful'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'narrative', label:x, kind:'nonGradable'})),
    ...['pure','sacred','heroic','sinister','corrupted','profane','infernal'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'symbolic', label:x, kind:'nonGradable'})),

    // UI / Design & Type
    ...['minimal UI','flat UI','glassmorphism','neumorphism','skeuomorphic','retro-futuristic'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'tech-ui', label:x, kind:'nonGradable'})),
    ...['pictogram','glyph','flat icon','gradient icon','isometric icon','3D icon'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'icon-style', label:x, kind:'nonGradable'})),
    ...['sans-serif modern','grotesk','humanist','geometric','serif classic','slab serif','display','blackletter','sci-fi'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'type-vibe', label:x, kind:'nonGradable'})),

    // Game Design
    ...[
        { id: 'top-down', label: 'top-down' },
        { id: 'dimetric-isometric', label: 'dimetric (2:1 isometric)' },
        { id: 'isometric', label: 'isometric' },
        { id: '2-5d', label: '2.5D' },
        { id: 'first-person', label: 'first-person' },
        { id: 'third-person', label: 'third-person' },
        { id: 'side-scroller', label: 'side-scroller' },
        { id: 'platformer-view', label: 'platformer view' },
        { id: 'not-perpendicular', label: 'not perpendicular', promptText: 'Avoid squares and vertical and horizontal lines.' }
    ].map(t => ({ ...t, axisId: 'game-view', kind: 'nonGradable' })),
    ...['2D art','sprite','pixel art','voxel art','cel-shaded','low-poly','hand-painted texture','concept art','dithering','limited palette','ANSI art'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'game-art-style', label:x, kind:'nonGradable'})),
    ...['game asset','character sprite sheet','game UI','HUD display','level design','game background','item icon','skill icon'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'game-elements', label:x, kind:'nonGradable'})),

    // Constraints & Quality
    ...['no text','no watermark','no frame','no border','no logo','no people','no clutter','no artifacts', 'no ambient occlusion', 'no shadows', 'no shading', 'no directional lighting'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'negations', label:x, kind:'nonGradable'})),
    ...['clean render','high fidelity','high detail','high contrast','natural skin','realistic textures','physically plausible lighting','isolated on white background','transparent background','sprite sheet layout','asset pack'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'quality', label:x, kind:'nonGradable'})),
    ...['monochrome','duotone','complementary','analogous','triadic','split-complementary','muted palette','pastel','jewel-tone','neon'].map(x=>({ id:x.toLowerCase().replace(/\s+/g,'-'), axisId:'color-mood', label:x, kind:'nonGradable'})),
]

// --- Prompt template (ordered, production-friendly) ---
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
]

// --- Default profile ---
export const PROFILE_DEFAULT = {
    id: 'profile-default',
    name: 'General',
    // FIXED: Corrected 'style-slot' to 'slot-style' to match the ID in TEMPLATE_SLOTS.
    slotOrder: ['slot-scale','slot-light','slot-optics','slot-surface','slot-atmo','slot-motion','slot-camera','slot-style','slot-environ','slot-narrative','slot-ui','slot-game','slot-neg'],
    punctuationStyle: { slotSep: '; ', termSep: ', ' },
}