import React, { useState } from 'react';

import { Drawer } from '@mui/material';

export default function MyMenu() {
  const [drawerState, setDrawerState] = useState(false);

  const handleClose = () => {};

  return (
    <Drawer anchor={anchor} open={drawerState} onClose={toggleDrawer(anchor, false)}>
      {list(anchor)}
    </Drawer>
  );
}
