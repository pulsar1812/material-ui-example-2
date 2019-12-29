import React from 'react';
import { withWidth, AppBar, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles, category, onSelect, width }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };

  return (
    <AppBar position='static'>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor='secondary'
        textColor='secondary'
        centered={width !== 'xs'}
        variant={width === 'xs' ? 'scrollable' : 'standard'}
      >
        <Tab label='All' />
        {muscles.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withWidth()(Footer);
