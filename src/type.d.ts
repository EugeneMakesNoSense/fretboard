declare type Note = {
    noteNumber: number,
    sharpNote: string,
    flatNote: string,
}

declare type NoteInScale = Note & {
    positionInScale: number
}
