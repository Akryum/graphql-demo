<template>
  <div class="search">
    <div class="search-form">
      <input v-model="text" placeholder="Search"/>
    </div>

    <div class="results">
      <SearchResult
        v-for="(result, index) of searchResults"
        :key="index"
        :result="result"/>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const SEARCH_QUERY = gql`
query Search($text: String!) {
  searchResults: search(text: $text) {
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

import SearchResult from './SearchResult.vue'

export default {
  components: {
    SearchResult,
  },
  
  data () {
    return {
      text: '',
      searchResults: [],
    }
  },

  apollo: {
    searchResults: {
      query: SEARCH_QUERY,
      variables () {
        return {
          text: this.text,
        }
      },
      result: (result) => console.log(result),
      skip () {
        return !this.text
      },
      fetchPolicy: 'network-only',
    },
  },
}
</script>

<style lang="less" scoped>
.search-form {
  margin: 12px 0;
}
</style>
