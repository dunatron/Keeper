import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import CodeExampleCard from '../components/CodeExampleCard';

const styles = theme => ({
  progress: {
    margin: '100px'
  }
});

const CodeExampleQuery = gql`
query readCodeExamples {
  readCodeExamples {
    edges {
      node {
        ID
        ...CodeExampleOverview
      }
    }
  }
}
${CodeExampleCard.fragments.codeexample}
`;

class CodeExampleList extends Component {
  render () {
    const { classes, data: { loading, readCodeExamples } } = this.props;

    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    return readCodeExamples.edges.map(edge => {
      return <CodeExampleCard codeexample={edge.node} key={edge.node.ID} />;
    });
  }
}

export default compose(
  withStyles(styles),
  graphql(CodeExampleQuery)
)(CodeExampleList);