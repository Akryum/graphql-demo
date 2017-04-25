const collection = [
  {
    id: "1",
    name: "Star Wars - A New Hope",
    image: "http://www.coronacomingattractions.com/sites/default/files/star_wars_1977_poster_001.jpg",
    genre: "sf",
    releaseYear: 1977,
    directorId: "glucas",
  },
  {
    id: "2",
    name: "Blade Runner",
    image: "http://www.eatbrie.com/large_posters_files/Bladerunner4.jpg",
    genre: "sf",
    releaseYear: 1982,
    directorId: "rscott",
  },
  {
    id: "3",
    name: "The Dark Knight",
    image: "http://www.impawards.com/2008/posters/dark_knight_ver12_xlg.jpg",
    genre: "comics",
    releaseYear: 2008,
    directorId: "cnolan",
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
