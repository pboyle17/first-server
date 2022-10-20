console.log(document)
let tiles = document.querySelectorAll('.tile')
let tilesArray = [].slice.call(tiles)
console.log(tilesArray)
console.log(tiles)
tilesArray.forEach((tile) => {
  console.log(tile)
  tile.addEventListener('click', (e) => {
    console.log(e.target)
  })
})
