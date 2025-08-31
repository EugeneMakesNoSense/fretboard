# Fretboard (Fingerboard)

```js
const fretboard = new Fretboard(
    ['E', 'B' ,'G', 'D', 'A', 'E'], // Standard tuning
    3, // number of frets
)
```
## API
### getFretboard
The property contains two-dimensional array of note objects
```js
fretboard.getFretboard[0] // first string
fretboard.getFretboard[0][0] // open note on the first string
```


```bash
[
  [
    { noteNumber: 8, sharpNote: 'E', flatNote: 'E' },
    { noteNumber: 9, sharpNote: 'F', flatNote: 'F' },
    { noteNumber: 10, sharpNote: 'F#', flatNote: 'G♭' }
  ],
  [
    { noteNumber: 3, sharpNote: 'B', flatNote: 'B' },
    { noteNumber: 4, sharpNote: 'C', flatNote: 'C' },
    { noteNumber: 5, sharpNote: 'C#', flatNote: 'D♭' }
  ],
  [
    { noteNumber: 11, sharpNote: 'G', flatNote: 'G' },
    { noteNumber: 12, sharpNote: 'G#', flatNote: 'A♭' },
    { noteNumber: 1, sharpNote: 'A', flatNote: 'A' }
  ],
  [
    { noteNumber: 6, sharpNote: 'D', flatNote: 'D' },
    { noteNumber: 7, sharpNote: 'D#', flatNote: 'E♭' },
    { noteNumber: 8, sharpNote: 'E', flatNote: 'E' }
  ],
  [
    { noteNumber: 1, sharpNote: 'A', flatNote: 'A' },
    { noteNumber: 2, sharpNote: 'A#', flatNote: 'B♭' },
    { noteNumber: 3, sharpNote: 'B', flatNote: 'B' }
  ],
  [
    { noteNumber: 8, sharpNote: 'E', flatNote: 'E' },
    { noteNumber: 9, sharpNote: 'F', flatNote: 'F' },
    { noteNumber: 10, sharpNote: 'F#', flatNote: 'G♭' }
  ]
]
```
### getModeOnFretboard(rootNote, modeName)
```js
fretboard.getModeOnFretboard('E', 'ionian')
```
The method returns two-dimensional array array of note objects
```js
fretboard.getFretboard[0] // first string
fretboard.getFretboard[0][0] // open note on the first string
fretboard.getFretboard[0][0].positionInScale // -1 if not in scale
```
```bash
[
  [
    {
      noteNumber: 8,
      sharpNote: 'E',
      flatNote: 'E',
      positionInScale: 1
    },
    {
      noteNumber: 9,
      sharpNote: 'F',
      flatNote: 'F',
      positionInScale: -1
    },
    {
      noteNumber: 10,
      sharpNote: 'F#',
      flatNote: 'G♭',
      positionInScale: 2
    }
  ],
  [
    {
      noteNumber: 3,
      sharpNote: 'B',
      flatNote: 'B',
      positionInScale: 5
    },
    {
      noteNumber: 4,
      sharpNote: 'C',
      flatNote: 'C',
      positionInScale: -1
    },
    {
      noteNumber: 5,
      sharpNote: 'C#',
      flatNote: 'D♭',
      positionInScale: 6
    }
  ],
  ...
]
```