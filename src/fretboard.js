import { noteOnFretFactory } from './note.js'
import { noteToNumberMap, modesIntervalsMap, supportedNotes, supportedModes } from './constants.js'

/**
 * Represents a guitar fretboard.
 * @implements {FretboardInterface}
 */
export class Fretboard {
    #stringsMatrix

    /**
     * @param {string[]} strings - open note on each string
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

        const preparedStrings = strings.map(string => noteToNumberMap[string])

        this.#stringsMatrix = this.#createStringsMatrix(preparedStrings, frets)
    }

    /**
     * Validate the provided string notes
     * @param {string[]} strings - The string notes to validate
     */
    #validateStrings(strings) {
        for (const string of strings) {
            if (!supportedNotes.includes(string)) {
                throw new Error(`Invalid string note: ${string}. Supported notes: ${supportedNotes.join(', ')}`)
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
        if (openNoteNumber < 1 || openNoteNumber > 12) {
            throw new Error('Invalid open note number')
        }

        if (fret < 0) {
            throw new Error('Invalid fret number')
        }

        return (openNoteNumber + fret) % 12 || 12
    }

    /**
     * @param {number[]} strings - open note on each string
     * @param {number} frets - number of frets on the fretboard
     * @returns {Note[][]} - matrix of notes for each string and fret
     */
    #createStringsMatrix(strings, frets) {
        return strings.map((stringOpenNote) => {
            const stringNotes = [noteOnFretFactory(stringOpenNote)]

            for (let fret = 1; fret < frets; fret++) {
                stringNotes.push(noteOnFretFactory(this.#getNoteNumber(stringOpenNote, fret)))
            }

            return stringNotes
        })
    }

    /**
     * Get the position of a note in a scale
     * @param {number} currentNoteNumber - The note number to find the position for
     * @param {number} rootNoteNumber - The root note number of the scale
     * @param {number[]} modeIntervals - The intervals of the mode
     * @returns {number} - The position of the note in the scale
     */
    #getPositionInScale(currentNoteNumber, rootNoteNumber, modeIntervals) {
        if (currentNoteNumber === rootNoteNumber) {
            return 1
        }

        const positionInScale = modeIntervals.findIndex(interval => (rootNoteNumber + interval) % 12 === currentNoteNumber)

        return positionInScale !== -1 ? positionInScale + 1 : -1
    }

    /**
     * Get the notes for a specific mode on the fretboard
     * @param {string} rootNote - The root note of the mode
     * @param {string} mode - The mode to get the notes for
     * @returns {NoteInScale[][]} - The notes for the mode on the fretboard
     */
    getModeOnFretboard(rootNote, mode) {
        const rootNoteNumber = noteToNumberMap[rootNote]

        if (!rootNoteNumber) {
            throw new Error(`Invalid root note. Supported notes: ${supportedNotes.join(', ')}`)
        }

        const modeIntervals = modesIntervalsMap[mode]

        if (!modeIntervals) {
            throw new Error(`Invalid mode. Supported modes: ${supportedModes.join(', ')}`)
        }

        return this.#stringsMatrix.map(string => {
            return string.map((note) => ({
                ...note,
                positionInScale: this.#getPositionInScale(note.noteNumber, rootNoteNumber, modeIntervals)
            }))
        })
    }

    get getFretboard() {
        return this.#stringsMatrix
    }
}