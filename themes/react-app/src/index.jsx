import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
// import { HttpLink } from 'apollo-link-http';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragments.json';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


/**
 *
 * @type {IntrospectionFragmentMatcher}
 */
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

// Platform being built
console.log(introspectionQueryResultData);

/**
 * Decide which GraphQL API to hit (dev || prod)
 */
let NetworkURI = GRAPHQLURIDEV;

// global env const set in webpack.conf.js
if(PRODUCTION) {
  NetworkURI = GRAPHQLURIPROD // http://keeper.whatshapp.nz/graphql
} else {
  NetworkURI = GRAPHQLURIDEV // http://keeper.d/graphql
}

/**
 * Configure interface
 * @type {HTTPNetworkInterface}
 */
const networkInterface = createNetworkInterface({
  uri: NetworkURI
});


/**
 * Trying to get this Cache to work to get union or interface query types working
 * @type {InMemoryCache}
 */
const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  cache,
  link: new HttpLink(NetworkURI)
});



// const client = new ApolloClient({
//   networkInterface: networkInterface
// });

// const client = new ApolloClient({
//   cache,
//   networkInterface: networkInterface
// });


// ReactDOM.render(<App />, document.getElementById('react-root'));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('react-root')
);


// SS React theme Entry Point

if(PRODUCTION) {
  console.log('PRODUCTION BUILD');
} else {
  console.log('DEVELOPMENT BUILD');
}