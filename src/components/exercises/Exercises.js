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
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 400,
    overflow: 'auto'
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
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
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
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
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
