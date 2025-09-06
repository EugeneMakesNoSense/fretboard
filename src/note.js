import { numberToSharpNoteMap, numberToFlatNoteMap } from './constants.js'

/**
 * Factory function to create a note object on a fret
 * @param {number} noteNumber - The note number
 * @param {number | null} octave - The octave number
 * @returns {Note} - The note object
 */
export const noteOnFretFactory = (noteNumber, octave = null) => ({
    noteNumber,
    sharpNote: numberToSharpNoteMap[noteNumber],
    flatNote: numberToFlatNoteMap[noteNumber],
    octave,
})
