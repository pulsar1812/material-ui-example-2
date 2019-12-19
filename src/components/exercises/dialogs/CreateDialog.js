import React, { Component, Fragment } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fab,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    width: 500
  }
});

class CreateDialog extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = () => {
    // TODO: validate
    const { exercise } = this.state;

    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    });
  };

  render() {
    const {
      open,
      exercise: { title, description, muscles }
    } = this.state;

    const { classes, muscles: categories } = this.props;

    return (
      <Fragment>
        <Fab
          size='small'
          color='primary'
          aria-label='add'
          onClick={this.handleToggle}
        >
          <AddIcon />
        </Fab>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id='form-dialog-title'>
            Create a new exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
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
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color='primary'
              variant='contained'
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateDialog);
