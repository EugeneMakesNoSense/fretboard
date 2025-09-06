/**
 * Map of note names to their corresponding note numbers
 * @type {Record<string, number>}
 */
export const noteToNumberMap = {
    'A': 1,
    'A#': 2,
    'B♭': 2,
    'B': 3,
    'C': 4,
    'C#': 5,
    'D♭': 5,
    'D': 6,
    'D#': 7,
    'E♭': 7,
    'E': 8,
    'F': 9,
    'F#': 10,
    'G♭': 10,
    'G': 11,
    'G#': 12,
    'A♭': 12
}

export const supportedNotes = Object.keys(noteToNumberMap)

export const chromaticScaleNotesNumber = 12

/**
 * Map of note numbers to their corresponding major note names
 * @type {Record<number, string>}
 */
export const numberToSharpNoteMap = {
    1: 'A',
    2: 'A#',
    3: 'B',
    4: 'C',
    5: 'C#',
    6: 'D',
    7: 'D#',
    8: 'E',
    9: 'F',
    10: 'F#',
    11: 'G',
    12: 'G#'
}

/**
 * Map of note numbers to their corresponding major note names
 * @type {Record<number, string>}
 */
export const numberToFlatNoteMap = {
    1: 'A',
    2: 'B♭',
    3: 'B',
    4: 'C',
    5: 'D♭',
    6: 'D',
    7: 'E♭',
    8: 'E',
    9: 'F',
    10: 'G♭',
    11: 'G',
    12: 'A♭'
}

/**
 * Map of modes to their corresponding intervals
 * @type {Record<string, number[]>}
 */
export const modesIntervalsMap = {
    'ionian': [0, 2, 4, 5, 7, 9, 11],
    'dorian': [0, 2, 3, 5, 7, 9, 10],
    'phrygian': [0, 1, 3, 5, 7, 8, 10],
    'lydian': [0, 2, 4, 6, 7, 9, 11],
    'mixolydian': [0, 2, 4, 5, 7, 9, 10],
    'aeolian': [0, 2, 3, 5, 7, 8, 10],
    'locrian': [0, 1, 3, 5, 6, 8, 10]
}

export const supportedModes = Object.keys(modesIntervalsMap)