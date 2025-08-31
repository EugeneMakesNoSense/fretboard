import { it, describe } from 'node:test'
import assert from 'node:assert'

import { Fretboard } from './index.js'

describe('Fretboard', () => {
    describe('constructor', () => {
        it('should create frets representation during initialization', () => {
            const fretboard = new Fretboard(
                ['A', 'E'],
                2
            )

            const expectedStringMatrix = [
                [
                    { noteNumber: 1, sharpNote: 'A', flatNote: 'A' },
                    { noteNumber: 2, sharpNote: 'A#', flatNote: 'B♭' },
                ],
                [
                    { noteNumber: 8, sharpNote: 'E', flatNote: 'E' },
                    { noteNumber: 9, sharpNote: 'F', flatNote: 'F' },
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
                ['A', 'E'],
                2
            )

            const expectedAMinorStringMatrix = [
                [
                    { noteNumber: 1, sharpNote: 'A', flatNote: 'A', positionInScale: 1 },
                    { noteNumber: 2, sharpNote: 'A#', flatNote: 'B♭', positionInScale: -1 },
                ],
                [
                    { noteNumber: 8, sharpNote: 'E', flatNote: 'E', positionInScale: 5 },
                    { noteNumber: 9, sharpNote: 'F', flatNote: 'F', positionInScale: 6 },
                ]
            ]

            assert.deepStrictEqual(fretboard.getModeOnFretboard('A', 'aeolian'), expectedAMinorStringMatrix)
        })

        it.todo('should throw if invalid root note is provided')
        it.todo('should throw if invalid mode is provided')
    })
})