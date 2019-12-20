import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Dialog from '../exercises/Dialog';

const Header = ({ muscles, onExerciseCreate }) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography variant='h6' color='inherit' style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <Dialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);

export default Header;
