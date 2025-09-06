import { it, describe } from 'node:test'
import assert from 'node:assert'

import { Fretboard } from './index.js'

describe('Fretboard', () => {
    describe('constructor', () => {
        it('should create frets representation without octaves during initialization', () => {
            const fretboard = new Fretboard(
                [{ note: 'A' }, { note: 'E♭' }],
                2
            )

            const expectedStringMatrix = [
                [
                    { noteNumber: 1, sharpNote: 'A', flatNote: 'A', octave: null },
                    { noteNumber: 2, sharpNote: 'A#', flatNote: 'B♭', octave: null },
                ],
                [
                    { noteNumber: 7, sharpNote: 'D#', flatNote: 'E♭', octave: null },
                    { noteNumber: 8, sharpNote: 'E', flatNote: 'E', octave: null },
                ]
            ]

            assert.deepStrictEqual(fretboard.getFretboard, expectedStringMatrix)
        })

        it('should create frets representation with octaves during initialization', () => {
            const fretboard = new Fretboard(
                [{ note: 'A', octave: 0 }, { note: 'E', octave: 2 }],
                2
            )

            const expectedStringMatrix = [
                [
                    { noteNumber: 1, sharpNote: 'A', flatNote: 'A', octave: 0 },
                    { noteNumber: 2, sharpNote: 'A#', flatNote: 'B♭', octave: 0 },
                ],
                [
                    { noteNumber: 8, sharpNote: 'E', flatNote: 'E', octave: 2 },
                    { noteNumber: 9, sharpNote: 'F', flatNote: 'F', octave: 2 },
                ]
            ]

            assert.deepStrictEqual(fretboard.getFretboard, expectedStringMatrix)
        })

        it('should throw if no strings are provided', () => {
            assert.throws(() => new Fretboard([], 2), {
                message: 'No strings provided'
            })
        })
        it('should throw if invalid string name is provided', () => {
            assert.throws(() => new Fretboard([{ note: 'InvalidNote' }], 2), {
                message: 'Invalid string note: InvalidNote. Supported notes: A, A#, B♭, B, C, C#, D♭, D, D#, E♭, E, F, F#, G♭, G, G#, A♭'
            })
        })
        it('should throw if invalid number of frets is provided', () => {
            assert.throws(() => new Fretboard([{ note: 'A' }, { note: 'E' }], 0), {
                message: 'Invalid number of frets'
            })
        })
    })

    describe('getModeOnFretboard', () => {
        it('should return the correct notes for the A aeolian mode', () => {
            const fretboard = new Fretboard(
                [{ note: 'A' }, { note: 'E' }],
                2
            )

            const expectedAMinorStringMatrix = [
                [
                    { noteNumber: 1, sharpNote: 'A', flatNote: 'A', octave: null, positionInScale: 1 },
                    { noteNumber: 2, sharpNote: 'A#', flatNote: 'B♭', octave: null, positionInScale: -1 },
                ],
                [
                    { noteNumber: 8, sharpNote: 'E', flatNote: 'E', octave: null, positionInScale: 5 },
                    { noteNumber: 9, sharpNote: 'F', flatNote: 'F', octave: null, positionInScale: 6 },
                ]
            ]

            assert.deepStrictEqual(fretboard.getModeOnFretboard('A', 'aeolian'), expectedAMinorStringMatrix)
        })

        it('should throw if invalid root note is provided', () => {
            const fretboard = new Fretboard(
                [{ note: 'A' }, { note: 'E' }],
                2
            )

            assert.throws(() => fretboard.getModeOnFretboard('InvalidNote', 'aeolian'), {
                message: 'Invalid root note. Supported notes: A, A#, B♭, B, C, C#, D♭, D, D#, E♭, E, F, F#, G♭, G, G#, A♭'
            })
        })

        it('should throw if invalid mode is provided', () => {
            const fretboard = new Fretboard(
                [{ note: 'A' }, { note: 'E' }],
                2
            )

            assert.throws(() => fretboard.getModeOnFretboard('A', 'InvalidMode'), {
                message: 'Invalid mode. Supported modes: ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian'
            })
        })
    })
})