import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = {

  textFieldWrapper: {
    'width': '100%'
  },

  textField: {
    'width': '100%',
    'font-size': '32px',
    'text-align': 'center',
  },
  input: {
    'text-align': 'center',
    'font-size': '32px'
  }

};

class TextFieldExampleControlled extends Component {

  constructor() {
    super();

    this.state = {
      value: 'Search',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.textFieldWrapper}>
        <TextField className={classes.textField}
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
        />
      </div>
    );
  }
}

// TextFieldExampleControlled.propTypes = {
//
// };

export default withStyles(styles)(TextFieldExampleControlled);