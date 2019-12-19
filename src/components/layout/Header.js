import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../exercises/dialogs/CreateDialog';

const Header = ({ muscles, onExerciseCreate }) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography variant='h6' color='inherit' style={{ flex: 1 }}>
        Exercise Database
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);

export default Header;
