const collection = [
  {
    id: "1",
    image: "https://i.kinja-img.com/gawker-media/image/upload/s--fJl0282Z--/c_scale,f_auto,fl_progressive,q_80,w_800/1484233348223075652.jpg",
    name: "The Expanse",
    genre: "sf",
    currentSeason: 2,
  },
  {
    id: "2",
    image: "https://s-media-cache-ak0.pinimg.com/originals/74/cc/53/74cc531dd9b4d322c218c3f868c53bad.jpg",
    name: "Game of Thrones",
    genre: "fantasy",
    currentSeason: 6,
  },
]

export function getAll () {
  return collection
}

export function getByGenre (genre) {
  return collection.filter(i => i.genre === genre)
}

export function getById (id) {
  return collection.find(i => i.id === id)
}
