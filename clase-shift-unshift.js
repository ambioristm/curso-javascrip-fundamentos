// Methods that modify the original array (Mutability).

// shift() elimina el primer item del array que seria el ultimo item de la pila o stack.
// y nos muestra el elemento eliminado.

const colors = ['yellow', 'blue', 'red']
const removedColors = colors.shift()

console.log(colors)
console.log(removedColors)

// unshift() nos agrega un nuevo elemento al inicio de nuestro array que seria un nuevo elemento en el fondo del stack.
// y nos muestra o devuelve la cantidad de elementos del array.

const newColors = colors.unshift('pink', 'purple')

console.log(colors)
console.log(newColors)

// Exercise: Managing a Playlist

function managePlaylist (playlist, newSong) {
  playlist.shift()
  playlist.unshift(newSong)
  return playlist
}

const initialPlaylist = ['Dios esta aquí', 'Plenitud de Gozo', 'En tu Presencia']
const newSongToAdd = 'Alaba a Dios'

const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial Playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Updated playlist: ', updatedPlaylist)