import { apolloClient } from './apollo'

// Demos

import gql from 'graphql-tag'

const MOVIES_QUERY = gql`
query Movies($genre: String) {
  movies (genre: $genre) {
    id
    name
    image
    genre
    releaseYear
  }
}`

window.simpleQuery = () => {
  apolloClient.query({
    query: MOVIES_QUERY,
    variables: {
      genre: "sf",
    },
  }).then(result => {
    console.log(result)
  })
}

const q = apolloClient.watchQuery({
  query: MOVIES_QUERY,
})

window.q = q

window.subscribe = () => {
  const sub = q.subscribe({
    next: (result) => console.log(result),
    error: (error) => console.error(error),
  })
}

// Later...

window.unsubscribe = () => {
  sub.unsubscribe()
}

/*

q.refetch()

q.setVariables({
  genre: 'comics',
})

q.setOptions({
  fetchPolicy: 'cache-only',
})

*/

/*

q.fetchMore({
  // New variables
  variables: {
    page: this.page,
    pageSize,
  },
  // Transform the previous result with new data
  updateQuery: (previousResult, { fetchMoreResult }) => {
    const newMovies = fetchMoreResult.paginatedMovies.movies
    const hasMore = fetchMoreResult.paginatedMovies.hasMore

    this.showMoreEnabled = hasMore

    return {
      paginatedMovies: {
        // Merging the movie list
        movies: [...previousResult.paginatedMovies.tags, ...newMovies],
        hasMore,
      },
    }
  },
})

*/

/*

apolloClient.mutate({
  mutation: gql`mutation ($label: String!) {
    addTag(label: $label) {
      id
      label
    }
  }`,
  variables: { label: newTag },
  updateQueries: {
    tagList: (previousResult, { mutationResult }) => ({
      tags: [...previousResult.tags, mutationResult.data.addTag],
    }),
  },
  optimisticResponse: {
    __typename: 'Mutation',
    addTag: {
      __typename: 'Tag',
      id: -1,
      label: newTag,
    },
  },
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.error(error)
  this.newTag = newTag
})

*/


const SEARCH_QUERY = gql`
query Search($text: String!) {
  search(text: $text) {
    score
    item {
      ... on Entity {
        id
        name
        image
      }
    }
  }
}
`

window.search = (text) => {
  apolloClient.query({
    query: SEARCH_QUERY,
    variables: {
      text,
    },
    fetchPolicy: 'network-only'
  }).then(result => {
    console.log(result)
  }).catch(e => {
    console.error(e)
  })
}

import './app'

