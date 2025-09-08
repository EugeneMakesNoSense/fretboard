import { noteOnFretFactory } from './note.js'
import { noteToNumberMap, supportedNotes, chromaticScaleNotesNumber } from './constants.js'

/**
 * Represents a guitar fretboard.
 * @implements {FretboardInterface}
 */
export class Fretboard {
    #stringsMatrix

    /**
     * @param {OpenNote[]} strings - open note on each string
     * @param {number} frets - number of frets on the fretboard
     */
    constructor(strings, frets) {
        if (strings.length === 0) {
            throw new Error('No strings provided')
        }

        if (frets <= 0) {
            throw new Error('Invalid number of frets')
        }

        this.#validateStrings(strings)

        this.#stringsMatrix = this.#createStringsMatrix(strings, frets)
    }

    /**
     * Validate the provided string notes
     * @param {OpenNote[]} strings - The string notes to validate
     */
    #validateStrings(strings) {
        for (const string of strings) {
            if (!supportedNotes.includes(string.note)) {
                throw new Error(`Invalid string note: ${string.note}. Supported notes: ${supportedNotes.join(', ')}`)
            }
        }
    }

    /**
     * Get the note number on the fret
     * @param {number} openNoteNumber - The open note number
     * @param {number} fret - The fret number
     * @returns {number} - The note number on the fret
     */
    #getNoteNumber(openNoteNumber, fret) {
        if (openNoteNumber < 1 || openNoteNumber > chromaticScaleNotesNumber) {
            throw new Error('Invalid open note number')
        }

        if (fret < 0) {
            throw new Error('Invalid fret number')
        }

        return (openNoteNumber + fret) % chromaticScaleNotesNumber || chromaticScaleNotesNumber
    }

    /**
     * @param {OpenNote[]} strings - open note on each string
     * @param {number} frets - number of frets on the fretboard
     * @returns {Note[][]} - matrix of notes for each string and fret
     */
    #createStringsMatrix(strings, frets) {
        return strings.map((string) => {
            const stringNumber = noteToNumberMap[string.note]

            const stringNotes = [noteOnFretFactory(stringNumber, string.octave)]

            for (let fret = 1; fret <= frets; fret++) {
                stringNotes.push(noteOnFretFactory(this.#getNoteNumber(stringNumber, fret), string.octave))
            }

            return stringNotes
        })
    }

    /**
     * Get the position of a note in a scale
     * @param {number} currentNoteNumber - The note number to find the position for
     * @param {number} rootNoteNumber - The root note number of the scale
     * @param {number[]} modeIntervals - The intervals of the mode
     * @returns {number | null} - The position of the note in the scale
     */
    #getPositionInScale(currentNoteNumber, rootNoteNumber, modeIntervals) {
        if (currentNoteNumber === rootNoteNumber) {
            return 1
        }

        const scalePosition = modeIntervals.findIndex(interval => (rootNoteNumber + interval) % chromaticScaleNotesNumber === currentNoteNumber)

        return scalePosition !== -1 ? scalePosition + 1 : null
    }

    /**
     * Get the notes for a specific mode on the fretboard
     * @param {string} rootNote - The root note of the mode
     * @param {number[]} modeIntervals - The mode to get the notes for
     * @returns {Note[][]} - The notes for the mode on the fretboard
     */
    setMode(rootNote, modeIntervals) {
        const rootNoteNumber = noteToNumberMap[rootNote]

        if (!rootNoteNumber) {
            throw new Error(`Invalid root note. Supported notes: ${supportedNotes.join(', ')}`)
        }

        if (!Array.isArray(modeIntervals) || modeIntervals.length === 0) {
            throw new Error('Invalid mode intervals')
        }

        this.#stringsMatrix = this.#stringsMatrix.map(string => {
            return string.map((note) => ({
                ...note,
                scalePosition: this.#getPositionInScale(note.number, rootNoteNumber, modeIntervals)
            }))
        })

        return this.#stringsMatrix
    }

    get fretboard() {
        return this.#stringsMatrix
    }
}