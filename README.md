# Fretboard (Fingerboard)

```js
const fretboard = new Fretboard(
    [
        { note: 'E', octave: 2 },
        { note: 'A', octave: 2 },
        { note: 'D', octave: 3 },
        { note: 'G', octave: 3 },
        { note: 'B', octave: 3 },
        { note: 'E', octave: 4 },
    ], // Standard tuning
    17, // number of frets
)
```
## API

### `fretboard` property
The property contains two-dimensional array of note objects
```js
fretboard.fretboard[0] // highest string
fretboard.fretboard[0][0] // open note on the highest string
fretboard.fretboard[0][1] // first fret on the highest string
```
### setMode(rootNote: string, modeIntervals: number[])
```js
fretboard.setMode('E', [0, 2, 4, 5, 7, 9, 11]) // E major
```
The method returns two-dimensional array array of note objects
```js
fretboard.fretboard[0][0].scalePosition // position in the scale (1-n) or null if the note is not in the scale
```

# Development notes
Project uses Typescript and JSDoc for type safety without compilation ([docs](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html))