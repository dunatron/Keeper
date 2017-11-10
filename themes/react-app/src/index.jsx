import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider, createNetworkInterface } from 'react-apollo';
import ApolloClient from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragments.json';
//import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Main menu
import MainMenu from './components/MenuList';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

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

const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: NetworkURI })
});



// ReactDOM.render(<App />, document.getElementById('react-root'));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <MainMenu />
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route exact path="/code-examples" component={AboutPage} />
          <Route exact path="/contact-us" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('react-root')
);


// SS React theme Entry Point

if(PRODUCTION) {
  console.log('PRODUCTION BUILD');
} else {
  console.log('DEVELOPMENT BUILD');
}