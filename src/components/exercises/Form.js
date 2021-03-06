import React, { Component } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

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
  };

  render() {
    const { exercise, muscles: categories } = this.props;

    const { title, description, muscles } = this.state;

    return (
      <form>
        <TextField
          label='Title'
          value={title}
          onChange={this.handleChange('title')}
          margin='normal'
          fullWidth
        />
        <br />
        <FormControl fullWidth>
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
          fullWidth
        />
        <br />
        <Button
          color='primary'
          variant='contained'
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    );
  }
}

export default Form;
