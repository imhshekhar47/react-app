import { Dashboard, Info } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import { ControlPanel } from './components';

export const App: React.FunctionComponent = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <ControlPanel title='React App'
        links={[
          {
            lable: "Dashboard",
            path: "/dashboard",
            icon: <Dashboard />
          },
          {
            lable: "About",
            path: "/about",
            icon: <Info />
          }
        ]} />
    </Container>
  );
}

export default App;
