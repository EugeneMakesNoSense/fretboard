declare type Note = {
    noteNumber: number,
    sharpNote: string,
    flatNote: string,
    octave: number | null
}

declare  type OpenNote = {
    note: string,
    octave?: number
}

declare type NoteInScale = Note & {
    positionInScale: number
}

declare interface FretboardInterface {
    getFretboard: Note[][],
    getModeOnFretboard(rootNote: string, mode: string): NoteInScale[][]
}
