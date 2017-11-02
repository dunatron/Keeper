import React, {Component} from 'react';
import {gql} from 'react-apollo';
import {propType as fragmentPropType} from 'graphql-anywhere';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ReactModal from 'react-modal';

const styles = {
  card: {
    'display': 'flex',
    'width': '15em',
    'height': '19em',
    'flex': '1 1 auto', // flex-grow, flex-shrink, flex-basis
    'flex-wrap': 'wrap',
    'margin': '10px',
    'overflow': '-webkit-paged-x'
  },
  media: {
    height: 200,
  },
  cardContent: {
    'height': '80%',
    'width': '100%',
    'overflow': 'hidden'
  },
  cardActions: {
    'height': '20%',
  },
  categoryCircle: {
    'height': '15px',
    'width': '15px',
    'border-radius': '15px',
    'margin': '8px'
  },
  categoryComponent: {
    'display': 'flex',
    'align-items': 'center',

  }
};

class CodeExampleCard extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {classes, codeexample: {Title, Body, Owner, Category}} = this.props;
    const color = '#' + Category.BgColor;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography type='headline' component='h2' align='left'>
            {Title}
          </Typography>
          <div className={classes.categoryComponent}>
            <div className={classes.categoryCircle} style={{backgroundColor: color}}></div>
            <Typography component='p' align='left'>
              {Category.Name}
            </Typography>
          </div>
          <Typography component='p' align='left'>
            created by: {Owner.Name}.
          </Typography>
          <Typography component='p' align='left'>
            {Body}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button dense color='primary' onClick={this.openModal}>
            Learn More
          </Button>
        </CardActions>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <div>ToDo:</div>
          <div>1 ) create a store on CodeExampleList and move the Modal there.</div>
          <div>2 ) CodeExampleList Will contain a currentData which will have data about one card</div>
          <div>3 ) On a card Button press send the data up to CodeExampleList</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </ReactModal>
      </Card>
    );
  }

}

CodeExampleCard.fragments = {
  codeexample: gql`
    fragment CodeExampleOverview on Code_Example {
      Title
      Body
      Owner {
        Name
        Surname
      }
      Category {
        Name
        BgColor
      }
    }
  `
};

CodeExampleCard.propTypes = {
  codeexample: fragmentPropType(CodeExampleCard.fragments.codeexample).isRequired
};

export default withStyles(styles)(CodeExampleCard);