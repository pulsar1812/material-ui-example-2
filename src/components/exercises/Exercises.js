import React, { Fragment } from 'react';
import {
  withStyles,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import Form from './Form';

const styles = theme => ({
  paper: {
    padding: 20,
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
});

const Exercises = ({
  classes,
  exercises,
  exercise,
  muscles,
  category,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  editMode,
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit
}) => (
  <Grid container className={classes.container}>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography variant='h5' style={{ textTransform: 'capitalize' }}>
                {group}
              </Typography>
              <List component='ul'>
                {exercises.map(({ id, title }) => (
                  <ListItem key={id} button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant='h4'>{title}</Typography>

        {editMode ? (
          <Form
            key={id}
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
          />
        ) : (
          <Typography variant='h5'>{description}</Typography>
        )}
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Exercises);
