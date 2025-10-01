// src/data/axes/atmosphere-weather.js
export const atmosphereWeatherAxes = [
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
];