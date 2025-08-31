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

            assert.deepStrictEqual(fretboard.getFretboard, expectedStringMatrix)
        })

        it('should throw if no strings are provided', () => {
            assert.throws(() => new Fretboard([], 2), {
                message: 'No strings provided'
            })
        })
        it('should throw if invalid string name is provided', () => {
            assert.throws(() => new Fretboard(['InvalidNote'], 2), {
                message: 'Invalid string note: InvalidNote. Supported notes: A, A#, B(f), B, C, C#, D(f), D, D#, E(f), E, F, F#, G(f), G, G#, A(f)'
            })
        })
        it('should throw if invalid number of frets is provided', () => {
            assert.throws(() => new Fretboard(['A', 'E'], 0), {
                message: 'Invalid number of frets'
            })
        })
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

        it('should throw if invalid root note is provided', () => {
            const fretboard = new Fretboard(
                ['A', 'E'],
                2
            )

            assert.throws(() => fretboard.getModeOnFretboard('InvalidNote', 'aeolian'), {
                message: 'Invalid root note. Supported notes: A, A#, B(f), B, C, C#, D(f), D, D#, E(f), E, F, F#, G(f), G, G#, A(f)'
            })
        })

        it('should throw if invalid mode is provided', () => {
            const fretboard = new Fretboard(
                ['A', 'E'],
                2
            )

            assert.throws(() => fretboard.getModeOnFretboard('A', 'InvalidMode'), {
                message: 'Invalid mode. Supported modes: ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian'
            })
        })
    })
})