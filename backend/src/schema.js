import * as Movies from './connectors/Movies'
import * as TvShows from './connectors/TvShows'
import * as Directors from './connectors/Directors'
import { search } from './connectors/Search'

import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
# General entity
interface Entity {
  id: ID!
  name: String!
  image: String
}

# Movie
type Movie implements Entity {
  id: ID!
  name: String!
  image: String
  genre: String!
  releaseYear: Int
  director: Director
}

# Director
type Director implements Entity {
  id: ID!
  name: String!
  image: String
  # Year
  born: Int
}

# TV Show
type TvShow implements Entity {
  id: ID!
  name: String!
  image: String
  genre: String!
  currentSeason: Int
}

# Possible Search Item
union SearchResultItem = Movie | TvShow | Director

# Search Result
type SearchResult {
  score: Int!
  item: SearchResultItem!
}

# Root Query
type Query {
  # Get all movies, optional genre filter
  movies(genre: String): [Movie]
  # Get a movie by its id
  movie(id: ID!): Movie
  # Get all tv shows, optional genre filter
  tvShows(genre: String): [TvShow]
  # Get a tv show by its id
  tvShow(id: ID!): TvShow
  # Search movies, tv shows and directors
  search(text: String!): [SearchResult]
}
`

const resolvers = {
  Movie: {
    director: (movie) => Directors.getById(movie.directorId),
  },
  SearchResultItem: {
    __resolveType (obj, context, info) {
      if (obj.directorId) {
        return 'Movie'
      }

      if (obj.currentSeason) {
        return 'TvShow'
      }

      if (obj.born) {
        return 'Director'
      }

      return null
    },
  },
  Query: {
    movies: (root, { genre }) => (genre && Movies.getByGenre(genre)) || Movies.getAll(),
    movie: (root, { id }) => Movies.getById(id),
    tvShows: (root, { genre }) => (genre && TvShows.getByGenre(genre)) || TvShows.getAll(),
    tvShow: (root, { id }) => TvShows.getById(id),
    search: (root, { text }) => search(text),
  },
}

const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default jsSchema
