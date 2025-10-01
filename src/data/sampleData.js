// src/data/sampleData.js

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
];

// --- Consolidated Axes ---
// This version corrects all term labels to match the original intended output.
export const AXES = [
    // === Scale & Geometry ===
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

    // === Light & Color ===
    {
        id: 'brightness', name: 'Light Level (Brightness)', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'dark' }, { id: 't1', label: 'dim' }, { id: 't2', label: 'soft lit' }, { id: 't3', label: 'balanced light' },
            { id: 't4', label: 'bright' }, { id: 't5', label: 'very bright' }, { id: 't6', label: 'dazzling' }, { id: 't7', label: 'blinding' }
        ]
    },
    {
        id: 'contrast', name: 'Contrast', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'flat contrast' }, { id: 't1', label: 'low contrast' }, { id: 't2', label: 'balanced contrast' },
            { id: 't3', label: 'punchy contrast' }, { id: 't4', label: 'high contrast' }, { id: 't5', label: 'stark contrast' },
            { id: 't6', label: 'extreme contrast' }, { id: 't7', label: 'chiaroscuro' }
        ]
    },
    {
        id: 'saturation', name: 'Color Saturation', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'monochrome (no color; 0% color saturation)' },
            { id: 't1', label: 'desaturated color saturation (very low)' },
            { id: 't2', label: 'muted color saturation (subdued)' },
            { id: 't3', label: 'natural color saturation (true-to-life)' },
            { id: 't4', label: 'vivid color saturation (high)' },
            { id: 't5', label: 'saturated color saturation (very high)' },
            { id: 't6', label: 'hyper-saturated color saturation (extreme)' },
            { id: 't7', label: 'neon color saturation (extreme, glowing)' }
        ]
    },
    {
        id: 'color-temp', name: 'Color Temperature', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'icy-cool color temperature (bluish)' },
            { id: 't1', label: 'cool color temperature' },
            { id: 't2', label: 'neutral white balance (no tint)' },
            { id: 't3', label: 'warm color temperature' },
            { id: 't4', label: 'golden-hour warm color temperature' },
            { id: 't5', label: 'amber warm color temperature' },
            { id: 't6', label: 'fiery warm color temperature (reddish)' }
        ]
    },
    {
        id: 'lighting-uniformity', name: 'Lighting Uniformity', kind: 'gradable', broaderGroupId: 'light-color',
        terms: [
            { id: 't0', label: 'dramatic lighting' }, { id: 't1', label: 'directional light' }, { id: 't2', label: 'diffuse light' },
            { id: 't3', label: 'flat lighting' }, { id: 't4', label: 'perfectly even light' }
        ]
    },

    // === Optics & Focus ===
    {
        id: 'sharpness', name: 'Sharpness / Focus', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'blurry' }, { id: 't1', label: 'soft focus' }, { id: 't2', label: 'crisp' }, { id: 't3', label: 'sharp' },
            { id: 't4', label: 'razor sharp' }, { id: 't5', label: 'tack sharp' }, { id: 't6', label: 'hyper sharp' }
        ]
    },
    {
        id: 'dof', name: 'Depth of Field', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'deep DOF' }, { id: 't1', label: 'moderate DOF' }, { id: 't2', label: 'shallow DOF' },
            { id: 't3', label: 'very shallow DOF' }, { id: 't4', label: 'razor thin' }, { id: 't5', label: 'bokeh heavy' }
        ]
    },
    {
        id: 'grain', name: 'Noise / Grain', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'grain free' }, { id: 't1', label: 'subtle grain' }, { id: 't2', label: 'light grain' },
            { id: 't3', label: 'noticeable grain' }, { id: 't4', label: 'gritty' }, { id: 't5', label: 'heavy grain' }, { id: 't6', label: 'noisy' }
        ]
    },
    {
        id: 'resolution', name: 'Resolution / Detail', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'simple shapes' }, { id: 't1', label: 'low detail' }, { id: 't2', label: 'clean detail' },
            { id: 't3', label: 'detailed' }, { id: 't4', label: 'highly detailed' }, { id: 't5', label: 'intricate' },
            { id: 't6', label: 'ultra detailed' }, { id: 't7', label: 'micro detail' }
        ]
    },
    {
        id: 'detail-distribution', name: 'Detail Distribution', kind: 'gradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'vignetted detail' }, { id: 't1', label: 'center focused detail' },
            { id: 't2', label: 'even detail distribution' }, { id: 't3', label: 'uniform edge to edge detail' }
        ]
    },
    {
        id: 'pixel-fidelity', name: 'Pixel Fidelity', kind: 'nonGradable', broaderGroupId: 'optics-focus',
        terms: [
            { id: 't0', label: 'pixel-perfect' }, { id: 't1', label: 'anti-aliased' },
            { id: 't2', label: 'crisp pixels' }, { id: 't3', label: 'subpixel rendering' }
        ]
    },

    // === Texture & Surface ===
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

    // === Atmosphere & Weather ===
    {
        id: 'atmo-density', name: 'Atmospheric Density', kind: 'gradable', broaderGroupId: 'atmosphere-weather',
        terms: [
            { id: 't0', label: 'clear atmosphere' }, { id: 't1', label: 'light haze' }, { id: 't2', label: 'hazy' }, { id: 't3', label: 'misty' },
            { id: 't4', label: 'foggy' }, { id: 't5', label: 'dense fog' }, { id: 't6', label: 'whiteout' }
        ]
    },
    {
        id: 'smoke', name: 'Smoke / Particulate', kind: 'gradable', broaderGroupId: 'atmosphere-weather',
        terms: [
            { id: 't0', label: 'trace' }, { id: 't1', label: 'wispy' }, { id: 't2', label: 'light smoke' }, { id: 't3', label: 'moderate smoke' },
            { id: 't4', label: 'thick smoke' }, { id: 't5', label: 'choking' }, { id: 't6', label: 'opaque smoke' }
        ]
    },
    {
        id: 'weather', name: 'Weather Severity', kind: 'gradable', broaderGroupId: 'atmosphere-weather',
        terms: [
            { id: 't0', label: 'calm' }, { id: 't1', label: 'breezy' }, { id: 't2', label: 'windy' }, { id: 't3', label: 'gale' },
            { id: 't4', label: 'stormy' }, { id: 't5', label: 'severe storm' }, { id: 't6', label: 'violent' }, { id: 't7', label: 'cataclysmic' }
        ]
    },

    // === Motion & Time ===
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

    // === Composition & Camera ===
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

    // === Style & Medium ===
    {
        id: 'style-photographic', name: 'Photographic Look', kind: 'nonGradable', broaderGroupId: 'style-medium',
        terms: [
            { id: 't0', label: 'cinematic' }, { id: 't1', label: 'film still' }, { id: 't2', label: 'editorial' }, { id: 't3', label: 'studio' },
            { id: 't4', label: 'documentary' }, { id: 't5', label: 'street' }, { id: 't6', label: 'lifestyle' }, { id: 't7', label: 'product' },
            { id: 't8', label: 'macro' }, { id: 't9', label: 'astrophotography' }, { id: 't10', label: 'HDR' }, { id: 't11', label: 'long exposure' },
            { id: 't12', label: 'tilt shift' }, { id: 't13', label: 'infrared' }, { id: 't14', label: 'lomography' }, { id: 't15', label: 'Polaroid' }, { id: 't16', label: 'wet plate' }
        ]
    },
    {
        id: 'style-lighting', name: 'Lighting Pattern', kind: 'nonGradable', broaderGroupId: 'style-medium',
        terms: [
            { id: 't0', label: 'softbox' }, { id: 't1', label: 'Rembrandt' }, { id: 't2', label: 'butterfly' }, { id: 't3', label: 'split light' },
            { id: 't4', label: 'loop light' }, { id: 't5', label: 'rim light' }, { id: 't6', label: 'backlit' }, { id: 't7', label: 'hard light' },
            { id: 't8', label: 'chiaroscuro' }, { id: 't9', label: 'uniform ambient lighting' }, { id: 't10', label: 'Wraparound Light' }, { id: 't11', label: 'Diffuse Lighting' }
        ]
    },
    {
        id: 'style-art', name: 'Art Movement', kind: 'nonGradable', broaderGroupId: 'style-medium',
        terms: [
            { id: 't0', label: 'academic art' }, { id: 't1', label: 'baroque' }, { id: 't2', label: 'neoclassicism' },
            { id: 't3', label: 'pre-raphaelite brotherhood' }, { id: 't4', label: 'realism' }, { id: 't5', label: 'art nouveau' },
            { id: 't6', label: 'impressionism' }, { id: 't7', label: 'expressionism' }, { id: 't8', label: 'constructivism' },
            { id: 't9', label: 'cubism' }, { id: 't10', label: 'futurism' }, { id: 't11', label: 'surrealism' },
            { id: 't12', label: 'abstract expressionism' }, { id: 't13', label: 'minimalism' }, { id: 't14', label: 'brutalism' },
            { id: 't15', label: 'postmodernism' }, { id: 't16', label: 'vaporwave' }, { id: 't17', label: 'synthwave' }, { id: 't18', label: 'cyberpunk' },
            { id: 't19', label: 'solarpunk' }, { id: 't20', label: 'biopunk' }, { id: 't21', label: '8 bit aesthetic' },
            { id: 't22', label: '16 bit aesthetic' }, { id: 't23', label: 'retro gaming style' }
        ]
    },
    {
        id: 'style-illustration', name: 'Illustration / Render', kind: 'nonGradable', broaderGroupId: 'style-medium',
        terms: [
            { id: 't0', label: 'vector' }, { id: 't1', label: 'flat' }, { id: 't2', label: 'cel-shaded' }, { id: 't3', label: 'comic' }, { id: 't4', label: 'manga' },
            { id: 't5', label: 'painterly' }, { id: 't6', label: 'watercolor' }, { id: 't7', label: 'gouache' }, { id: 't8', label: 'oil-painted' },
            { id: 't9', label: 'impasto' }, { id: 't10', label: 'inked' }, { id: 't11', label: 'stippled' }, { id: 't12', label: 'woodcut' },
            { id: 't13', label: 'lithograph' }, { id: 't14', label: 'etching' }
        ]
    },
    {
        id: 'style-3d', name: '3D / CG Style', kind: 'nonGradable', broaderGroupId: 'style-medium',
        terms: [
            { id: 't0', label: 'photoreal PBR' }, { id: 't1', label: 'octane style' }, { id: 't2', label: 'cycles style' },
            { id: 't3', label: 'redshift style' }, { id: 't4', label: 'arnold style' }, { id: 't5', label: 'UE5 real time' },
            { id: 't6', label: 'voxel' }, { id: 't7', label: 'low poly' }, { id: 't8', label: 'clay render' }, { id: 't9', label: 'wireframe' }
        ]
    },
    {
        id: 'film-stock', name: 'Film / Stock Feel', kind: 'nonGradable', broaderGroupId: 'style-medium',
        terms: [
            { id: 't0', label: 'Kodak Portra' }, { id: 't1', label: 'Kodak Ektar' }, { id: 't2', label: 'Fuji Provia' },
            { id: 't3', label: 'Fuji Velvia' }, { id: 't4', label: 'Ilford HP5' }, { id: 't5', label: 'Cinestill 800T' }, { id: 't6', label: 'Agfa Vista' }
        ]
    },

    // === Materials & Patterns ===
    {
        id: 'materials', name: 'Material Looks', kind: 'nonGradable', broaderGroupId: 'materials-patterns',
        terms: [
            { id: 't0', label: 'ceramic' }, { id: 't1', label: 'porcelain' }, { id: 't2', label: 'glass' }, { id: 't3', label: 'chrome' },
            { id: 't4', label: 'brushed metal' }, { id: 't5', label: 'anodized' }, { id: 't6', label: 'carbon fiber' }, { id: 't7', label: 'concrete' },
            { id: 't8', label: 'stone' }, { id: 't9', label: 'marble' }, { id: 't10', label: 'wood' }, { id: 't11', label: 'leather' },
            { id: 't12', label: 'fabric' }, { id: 't13', label: 'velvet' }, { id: 't14', label: 'latex' }, { id: 't15', label: 'rubber' }
        ]
    },
    {
        id: 'patterns', name: 'Pattern / Repetition', kind: 'nonGradable', broaderGroupId: 'materials-patterns',
        terms: [
            { id: 't0', label: 'plain' }, { id: 't1', label: 'subtle pattern' }, { id: 't2', label: 'repeating' }, { id: 't3', label: 'tessellated' },
            { id: 't4', label: 'fractal' }, { id: 't5', label: 'recursive' }, { id: 't6', label: 'kaleidoscopic' }, { id: 't7', label: 'seamlessly tileable' },
            { id: 't8', label: 'repeating background' }, { id: 't9', label: 'tileable sprite' }, { id: 't10', label: 'wraparound design' },
            { id: 't11', label: 'matching edges' }, { id: 't12', label: 'horizontally seamless' }, { id: 't13', label: 'vertically seamless' },
            { id: 't14', label: 'geometric tessellation' }
        ]
    },

    // === Environment & Architecture ===
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

    // === Narrative & Tone ===
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

    // === UI / Design & Type ===
    {
        id: 'tech-ui', name: 'Tech Readability (UI/UX)', kind: 'nonGradable', broaderGroupId: 'ui-design',
        terms: [
            { id: 't0', label: 'minimal UI' }, { id: 't1', label: 'flat UI' }, { id: 't2', label: 'glassmorphism' },
            { id: 't3', label: 'neumorphism' }, { id: 't4', label: 'skeuomorphic' }, { id: 't5', label: 'retro futuristic' }
        ]
    },
    {
        id: 'icon-style', name: 'Iconographic Styles', kind: 'nonGradable', broaderGroupId: 'ui-design',
        terms: [
            { id: 't0', label: 'pictogram' }, { id: 't1', label: 'glyph' }, { id: 't2', label: 'flat icon' },
            { id: 't3', label: 'gradient icon' }, { id: 't4', label: 'isometric icon' }, { id: 't5', label: '3D icon' }
        ]
    },
    {
        id: 'type-vibe', name: 'Typographic Vibes', kind: 'nonGradable', broaderGroupId: 'ui-design',
        terms: [
            { id: 't0', label: 'sans serif modern' }, { id: 't1', label: 'grotesk' }, { id: 't2', label: 'humanist' },
            { id: 't3', label: 'geometric' }, { id: 't4', label: 'serif classic' }, { id: 't5', label: 'slab serif' },
            { id: 't6', label: 'display' }, { id: 't7', label: 'blackletter' }, { id: 't8', label: 'sci fi' }
        ]
    },

    // === Game Design ===
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

    // === Constraints & Quality ===
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
];

// --- Default profile ---
export const PROFILE_DEFAULT = {
    id: 'profile-default',
    name: 'General',
    slotOrder: ['slot-scale','slot-light','slot-optics','slot-surface','slot-atmo','slot-motion','slot-camera','slot-style','slot-environ','slot-narrative','slot-ui','slot-game','slot-neg'],
    punctuationStyle: { slotSep: '; ', termSep: ', ' },
};