import { numberToSharpNoteMap, numberToFlatNoteMap } from './constants.js'

/**
 * Factory function to create a note object on a fret
 * @param {number} number - The note number
 * @param {number | null} octave - The octave number
 * @returns {Note} - The note object
 */
export const noteOnFretFactory = (number, octave = null) => ({
    number,
    sharp: numberToSharpNoteMap[number],
    flat: numberToFlatNoteMap[number],
    octave,
    scalePosition: null
})
