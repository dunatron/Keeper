import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import './index.css';
import App from './App';

// Platform being built
console.log(PLATFORM);

let NetworkURI = GRAPHQLURIDEV;

// global env const set in webpack.conf.js
if(PRODUCTION) {
  NetworkURI = GRAPHQLURIPROD
} else {
  NetworkURI = GRAPHQLURIDEV
}

const networkInterface = createNetworkInterface({
  // uri: 'http://192.168.50.74:3001/graphql'
  // uri: 'http://192.168.50.74/graphql'
   //uri: 'http://ss4-react.d/graphql'
  //uri: 'http://ss4-react.whatshapp.nz/graphql'
  uri: NetworkURI

});

const client = new ApolloClient({
  networkInterface: networkInterface
});

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