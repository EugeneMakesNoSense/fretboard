import { it, describe } from 'node:test'
import assert from 'node:assert'

import { Fretboard } from './index.js'

describe('Fretboard', () => {
    describe('constructor', () => {
        it('should create frets representation during initialization', () => {
            const fretboard = new Fretboard(
                ['E', 'A'],
                2
            )

            const expectedStringMatrix = [
                [
                    { noteNumber: 1, majorNote: 'A', minorNote: 'A', highlighted: false, root: false },
                    { noteNumber: 2, majorNote: 'A#', minorNote: 'B♭', highlighted: false, root: false },
                ],
                [
                    { noteNumber: 8, majorNote: 'E', minorNote: 'E', highlighted: false, root: false },
                    { noteNumber: 9, majorNote: 'F', minorNote: 'F', highlighted: false, root: false },
                ]
            ]

            assert.deepStrictEqual(fretboard.stringsMatrix, expectedStringMatrix)
        })

        it.todo('should throw if no strings are provided')
        it.todo('should throw if invalid string name is provided')
        it.todo('should throw if invalid number of frets is provided')
    })

    describe('getModeOnFretboard', () => {
        it('should return the correct notes for the A aeolian mode', () => {
            const fretboard = new Fretboard(
                ['E', 'A'],
                2
            )

            const expectedAMinorStringMatrix = [
                [
                    { noteNumber: 1, majorNote: 'A', minorNote: 'A', highlighted: true, root: true, position: 1 },
                    { noteNumber: 2, majorNote: 'A#', minorNote: 'B♭', highlighted: false, root: false },
                ],
                [
                    { noteNumber: 8, majorNote: 'E', minorNote: 'E', highlighted: true, root: false, position: 5 },
                    { noteNumber: 9, majorNote: 'F', minorNote: 'F', highlighted: true, root: false, position: 6 },
                ]
            ]

            assert.deepStrictEqual(fretboard.getModeOnFretboard('A', 'aeolian'), expectedAMinorStringMatrix)
        })

        it.todo('should throw if invalid root note is provided')
        it.todo('should throw if invalid mode is provided')
    })
})