declare type Note = {
    noteNumber: number,
    sharpNote: string,
    flatNote: string,
}

declare type NoteInScale = Note & {
    positionInScale: number
}

declare interface FretboardInterface {
    getFretboard: Note[][],
    getModeOnFretboard(rootNote: string, mode: string): NoteInScale[][]
}
