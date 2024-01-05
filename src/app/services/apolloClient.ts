import { ApolloClient, InMemoryCache } from '@apollo/client';

// Instantiate an apollo client which will be used in both entire React component tree and RTK slices
export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
