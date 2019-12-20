import React, { Component } from 'react';
import {
  withStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

const styles = theme => ({
  formControl: {
    width: 250
  }
});

class Form extends Component {
  state = this.getInitState();

  getInitState() {
    const { exercise } = this.props;

    return exercise
      ? exercise
      : {
          title: '',
          description: '',
          muscles: ''
        };
  }

  static getDerivedStateFromProps({ exercise }) {
    return exercise || null;
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    });

    this.setState(this.getInitState());
  };

  render() {
    const { classes, exercise, muscles: categories } = this.props;

    const { title, description, muscles } = this.state;

    return (
      <form>
        <TextField
          label='Title'
          value={title}
          onChange={this.handleChange('title')}
          margin='normal'
          className={classes.formControl}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='muscles'>Muscles</InputLabel>
          <Select value={muscles} onChange={this.handleChange('muscles')}>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          multiline
          rows='4'
          label='Description'
          value={description}
          onChange={this.handleChange('description')}
          margin='normal'
          className={classes.formControl}
        />
        <br />
        <Button color='primary' variant='contained' onClick={this.handleSubmit}>
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
