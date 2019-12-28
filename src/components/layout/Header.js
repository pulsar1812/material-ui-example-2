import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '../exercises/Dialog';

const useStyles = makeStyles({
  flex: {
    flex: 1
  }
});

const Header = ({ muscles, onExerciseCreate }) => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' color='inherit' className={classes.flex}>
          Exercise Database
        </Typography>
        <Dialog muscles={muscles} onCreate={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
