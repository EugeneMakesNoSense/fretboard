import { it, describe } from 'node:test'
import assert from 'node:assert'

import { Fretboard } from './index.js'

describe('Fretboard', () => {
    describe('constructor', () => {
        it('should create frets representation without octaves during initialization', () => {
            const fretboard = new Fretboard([{ note: 'A' }, { note: 'E♭' }], 1)

            const expectedStringMatrix = [
                [
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 2,
                        sharp: 'A#',
                        flat: 'B♭',
                        octave: null,
                        scalePosition: null,
                    },
                ],
                [
                    {
                        number: 7,
                        sharp: 'D#',
                        flat: 'E♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 8,
                        sharp: 'E',
                        flat: 'E',
                        octave: null,
                        scalePosition: null,
                    },
                ],
            ]

            assert.deepStrictEqual(fretboard.fretboard, expectedStringMatrix)
        })

        it('should create frets representation with octaves during initialization', () => {
            const fretboard = new Fretboard(
                [
                    { note: 'A', octave: 0 },
                    { note: 'E', octave: 2 },
                ],
                2,
            )

            const expectedStringMatrix = [
                [
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: 0,
                        scalePosition: null,
                    },
                    {
                        number: 2,
                        sharp: 'A#',
                        flat: 'B♭',
                        octave: 0,
                        scalePosition: null,
                    },
                    {
                        number: 3,
                        sharp: 'B',
                        flat: 'B',
                        octave: 0,
                        scalePosition: null,
                    },
                ],
                [
                    {
                        number: 8,
                        sharp: 'E',
                        flat: 'E',
                        octave: 2,
                        scalePosition: null,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: 2,
                        scalePosition: null,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: 2,
                        scalePosition: null,
                    },
                ],
            ]

            assert.deepStrictEqual(fretboard.fretboard, expectedStringMatrix)
        })

        it('should throw if no strings are provided', () => {
            assert.throws(() => new Fretboard([], 2), {
                message: 'No strings provided',
            })
        })
        it('should throw if invalid string name is provided', () => {
            assert.throws(() => new Fretboard([{ note: 'InvalidNote' }], 2), {
                message:
                    'Invalid string note: InvalidNote. Supported notes: A, A#, B♭, B, C, C#, D♭, D, D#, E♭, E, F, F#, G♭, G, G#, A♭',
            })
        })
        it('should throw if invalid number of frets is provided', () => {
            assert.throws(
                () => new Fretboard([{ note: 'A' }, { note: 'E' }], 0),
                {
                    message: 'Invalid number of frets',
                },
            )
        })
    })

    describe('setMode', () => {
        it('should return the correct notes for the A aeolian mode', () => {
            const fretboard = new Fretboard([{ note: 'A' }, { note: 'E' }], 2)

            const aeolianIntervals = [0, 2, 3, 5, 7, 8, 10]

            const expectedAMinorStringMatrix = [
                [
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: 1,
                    },
                    {
                        number: 2,
                        sharp: 'A#',
                        flat: 'B♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 3,
                        sharp: 'B',
                        flat: 'B',
                        octave: null,
                        scalePosition: 2,
                    },
                ],
                [
                    {
                        number: 8,
                        sharp: 'E',
                        flat: 'E',
                        octave: null,
                        scalePosition: 5,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: null,
                        scalePosition: 6,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: null,
                        scalePosition: null,
                    },
                ],
            ]

            assert.deepStrictEqual(
                fretboard.setMode('A', aeolianIntervals),
                expectedAMinorStringMatrix,
            )
        })

        it('should throw if invalid root note is provided', () => {
            const fretboard = new Fretboard([{ note: 'A' }, { note: 'E' }], 2)

            const aeolianIntervals = [0, 2, 3, 5, 7, 8, 10]

            assert.throws(
                () => fretboard.setMode('InvalidNote', aeolianIntervals),
                {
                    message:
                        'Invalid root note. Supported notes: A, A#, B♭, B, C, C#, D♭, D, D#, E♭, E, F, F#, G♭, G, G#, A♭',
                },
            )
        })

        it('should throw if invalid mode is provided', () => {
            const fretboard = new Fretboard([{ note: 'A' }, { note: 'E' }], 2)

            assert.throws(() => fretboard.setMode('A', []), {
                message: 'Invalid mode intervals',
            })
        })
    })
})
