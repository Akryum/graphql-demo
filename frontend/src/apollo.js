import { ApolloClient, createNetworkInterface } from 'apollo-client'

// Create the apollo client
export const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
})
