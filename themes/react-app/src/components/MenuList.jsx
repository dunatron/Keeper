import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import MenuItem from './MenuItem';

const styles = theme => ({
  progress: {
    margin: '100px'
  }
});

const readPageItems = gql`
query readPages {
  readPages {
    edges {
      node {
        __typename
        ... on Page {
          ID
          ...PagesOverview
        }
        ... on SiteTree {
          ID
        }
      }
    }
  }
}
${MenuItem.fragments.menuitem}
`;

class MenuList extends Component {
  render () {
    const { classes, data: { loading, readPages } } = this.props;

    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    return readPages.edges.map(edge => {
      return <MenuItem menuitem={edge.node} key={edge.node.ID} />;
    });
  }
}

export default compose(
  withStyles(styles),
  graphql(readPageItems)
)(MenuList);

/**
 fragment PagesOverview on Page {
  ID
}
 query readPages {
  readPages {
    edges {
      node {
        __typename
        ... on Page {
          ID
          ...PagesOverview
        }
        ... on SiteTree {
          ID
        }
      }
    }
  }
}
 **/