import { numberToMajorNoteMap, numberToMinorNoteMap } from './constants.js'

/**
 * Factory function to create a note object on a fret
 * @param {number} noteNumber - The note number
 * @returns {Note} - The note object
 */
export const noteOnFretFactory = (noteNumber) => ({
    noteNumber,
    majorNote: numberToMajorNoteMap[noteNumber],
    minorNote: numberToMinorNoteMap[noteNumber],
    root: false,
    highlighted: false,
})
