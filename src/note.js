import { numberToSharpNoteMap, numberToFlatNoteMap } from './constants.js'

/**
 * Factory function to create a note object on a fret
 * @param {number} noteNumber - The note number
 * @returns {Note} - The note object
 */
export const noteOnFretFactory = (noteNumber) => ({
    noteNumber,
    sharpNote: numberToSharpNoteMap[noteNumber],
    flatNote: numberToFlatNoteMap[noteNumber],
})
