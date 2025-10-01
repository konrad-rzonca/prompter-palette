// src/data/index.js

// --- Broader groups ---
import { BROADER_GROUPS } from './broader-groups';

// --- Axes by group ---
import { atmosphereWeatherAxes } from './axes/atmosphere-weather';
import { compositionCameraAxes } from './axes/composition-camera';
import { constraintsAxes } from './axes/constraints';
import { environmentArchAxes } from './axes/environment-arch';
import { gameDesignAxes } from './axes/game-design';
import { lightColorAxes } from './axes/light-color';
import { materialsPatternsAxes } from './axes/materials-patterns';
import { motionTimeAxes } from './axes/motion-time';
import { narrativeToneAxes } from './axes/narrative-tone';
import { opticsFocusAxes } from './axes/optics-focus';
import { scaleGeometryAxes } from './axes/scale-geometry';
import { styleMediumAxes } from './axes/style-medium';
import { textureSurfaceAxes } from './axes/texture-surface';
import { uiDesignAxes } from './axes/ui-design';

// --- Prompt template & Profile ---
import { TEMPLATE_SLOTS, PROFILE_DEFAULT } from './template';


// --- Consolidated Axes ---
const AXES = [
    ...scaleGeometryAxes,
    ...lightColorAxes,
    ...opticsFocusAxes,
    ...textureSurfaceAxes,
    ...atmosphereWeatherAxes,
    ...motionTimeAxes,
    ...compositionCameraAxes,
    ...styleMediumAxes,
    ...materialsPatternsAxes,
    ...environmentArchAxes,
    ...narrativeToneAxes,
    ...uiDesignAxes,
    ...gameDesignAxes,
    ...constraintsAxes,
];

// Re-export everything for easy access
export {
    BROADER_GROUPS,
    AXES,
    TEMPLATE_SLOTS,
    PROFILE_DEFAULT
};