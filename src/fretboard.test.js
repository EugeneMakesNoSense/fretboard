import { it, describe } from 'node:test'
import assert from 'node:assert'

import { Fretboard, modesIntervalsMap } from './index.js'

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
            const fretboard = new Fretboard([{ note: 'E', octave: 2 }], 17)

            const expectedResult = [
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
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: 2,
                        scalePosition: null,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: 2,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: 2,
                        scalePosition: null,
                    },
                    {
                        number: 2,
                        sharp: 'A#',
                        flat: 'B♭',
                        octave: 2,
                        scalePosition: null,
                    },
                    {
                        number: 3,
                        sharp: 'B',
                        flat: 'B',
                        octave: 2,
                        scalePosition: null,
                    },
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 7,
                        sharp: 'D#',
                        flat: 'E♭',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 8,
                        sharp: 'E',
                        flat: 'E',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: 3,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: 3,
                        scalePosition: null,
                    },
                ],
            ]

            const result = fretboard.fretboard

            assert.deepStrictEqual(result, expectedResult)
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
            const fretboard = new Fretboard([{ note: 'A' }], 12)

            const expectedResult = [
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
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 3,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: 4,
                    },
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
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: 7,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: 1,
                    },
                ],
            ]

            const result = fretboard.setMode('A', modesIntervalsMap.aeolian)

            assert.deepStrictEqual(result, expectedResult)
        })

        it('should return the correct notes for the B locrian mode', () => {
            const fretboard = new Fretboard([{ note: 'B' }], 12)

            const expectedResult = [
                [
                    {
                        number: 3,
                        sharp: 'B',
                        flat: 'B',
                        octave: null,
                        scalePosition: 1,
                    },
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 2,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: 3,
                    },
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
                        scalePosition: 4,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: null,
                        scalePosition: 5,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: 6,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: 7,
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
                        scalePosition: 1,
                    },
                ],
            ]

            const result = fretboard.setMode('B', modesIntervalsMap.locrian)

            assert.deepStrictEqual(result, expectedResult)
        })

        it('should return the correct notes for the C ionian mode', () => {
            const fretboard = new Fretboard([{ note: 'C' }], 12)

            const expectedResult = [
                [
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 1,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: 2,
                    },
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
                        scalePosition: 3,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: null,
                        scalePosition: 4,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: 5,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: 6,
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
                        scalePosition: 7,
                    },
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 1,
                    },
                ],
            ]

            const result = fretboard.setMode('C', modesIntervalsMap.ionian)

            assert.deepStrictEqual(result, expectedResult)
        })

        it('should return the correct notes for the D dorian mode', () => {
            const fretboard = new Fretboard([{ note: 'D' }], 12)

            const expectedResult = [
                [
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: 1,
                    },
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
                        scalePosition: 2,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: null,
                        scalePosition: 3,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: 4,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: 5,
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
                        scalePosition: 6,
                    },
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 7,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: 1,
                    },
                ],
            ]

            const result = fretboard.setMode('D', modesIntervalsMap.dorian)

            assert.deepStrictEqual(result, expectedResult)
        })

        it('should return the correct notes for the E phrygian mode', () => {
            const fretboard = new Fretboard([{ note: 'E' }], 12)

            const expectedResult = [
                [
                    {
                        number: 8,
                        sharp: 'E',
                        flat: 'E',
                        octave: null,
                        scalePosition: 1,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: null,
                        scalePosition: 2,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: 3,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: 4,
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
                        scalePosition: 5,
                    },
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 6,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: 7,
                    },
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
                        scalePosition: 1,
                    },
                ],
            ]

            const result = fretboard.setMode('E', modesIntervalsMap.phrygian)

            assert.deepStrictEqual(result, expectedResult)
        })

        it('should return the correct notes for the F# lydian mode', () => {
            const fretboard = new Fretboard([{ note: 'E' }], 12)

            const expectedResult = [
                [
                    {
                        number: 8,
                        sharp: 'E',
                        flat: 'E',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: null,
                        scalePosition: 7,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: null,
                        scalePosition: 1,
                    },
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: null,
                        scalePosition: 2,
                    },
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
                        scalePosition: 3,
                    },
                    {
                        number: 3,
                        sharp: 'B',
                        flat: 'B',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 4,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: null,
                        scalePosition: 5,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 7,
                        sharp: 'D#',
                        flat: 'E♭',
                        octave: null,
                        scalePosition: 6,
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

            const result = fretboard.setMode('F#', modesIntervalsMap.lydian)

            assert.deepStrictEqual(result, expectedResult)
        })

        it('should return the correct notes for the G mixolydian mode', () => {
            const fretboard = new Fretboard([{ note: 'G' }], 12)

            const expectedResult = [
                [
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: 1,
                    },
                    {
                        number: 12,
                        sharp: 'G#',
                        flat: 'A♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 1,
                        sharp: 'A',
                        flat: 'A',
                        octave: null,
                        scalePosition: 2,
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
                        scalePosition: 3,
                    },
                    {
                        number: 4,
                        sharp: 'C',
                        flat: 'C',
                        octave: null,
                        scalePosition: 4,
                    },
                    {
                        number: 5,
                        sharp: 'C#',
                        flat: 'D♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 6,
                        sharp: 'D',
                        flat: 'D',
                        octave: null,
                        scalePosition: 5,
                    },
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
                        scalePosition: 6,
                    },
                    {
                        number: 9,
                        sharp: 'F',
                        flat: 'F',
                        octave: null,
                        scalePosition: 7,
                    },
                    {
                        number: 10,
                        sharp: 'F#',
                        flat: 'G♭',
                        octave: null,
                        scalePosition: null,
                    },
                    {
                        number: 11,
                        sharp: 'G',
                        flat: 'G',
                        octave: null,
                        scalePosition: 1,
                    },
                ],
            ]

            const result = fretboard.setMode('G', modesIntervalsMap.mixolydian)

            assert.deepStrictEqual(result, expectedResult)
        })

        it('should throw if invalid root note is provided', () => {
            const fretboard = new Fretboard([{ note: 'A' }, { note: 'E' }], 2)

            assert.throws(
                () =>
                    fretboard.setMode(
                        'InvalidNote',
                        modesIntervalsMap.mixolydian,
                    ),
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
