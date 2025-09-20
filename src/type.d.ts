declare type Note = {
    number: number
    sharp: string
    flat: string
    octave: number | null
    scalePosition: number | null
}

declare type OpenNote = {
    note: string
    octave?: number
}

declare interface FretboardInterface {
    fretboard: Note[][]
    setMode(rootNote: string, modeIntervals: number[]): Note[][]
}
