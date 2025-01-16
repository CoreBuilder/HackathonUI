import React from 'react';
import { CssBaseline, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import CardGrid from './CardGrid';

const MainLayout: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <CssBaseline />
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem component={Link} to="/list">
          <ListItemText primary="Liste" />
        </ListItem>
      </List>
    </Drawer>
    <main style={{ padding: '1rem', marginLeft: 240 }}>
      <CardGrid />
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
