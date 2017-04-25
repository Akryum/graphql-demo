const collection = [
  {
    id: "glucas",
    name: "George Lucas",
    image: "http://vignette2.wikia.nocookie.net/labyrinth/images/a/a1/139924-george-lucas.jpg/revision/latest?cb=20111008202038",
    born: 1944,
  },
  {
    id: "rscott",
    name: "Ridley Scott",
    image: "http://fr.web.img3.acsta.net/pictures/14/12/10/16/47/273365.jpg",
    born: 1937,
  },
  {
    id: "cnolan",
    name: "Christopher Nolan",
    image: "http://akns-images.eonline.com/eol_images/Entire_Site/201589/rs_634x925-150909123151-634-christopher-nolan-2015.jpg",
    born: 1970,
  },
]

export function getAll () {
  return collection
}

export function getById (id) {
  return collection.find(i => i.id === id)
}
