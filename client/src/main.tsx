import { createRoot } from 'react-dom/client';
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App.tsx';
import '@mantine/core/styles.css';
import './index.css';

const theme = createTheme({});

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
