import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to={`code-examples`}>
          Go To Code Examples
        </Link>
      </div>
    )
  }

}