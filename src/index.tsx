import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, DashboardPage, UserPage } from './pages';
import { UserProfile } from './components';
import { UserToken } from './components/user/UserToken';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path='/user' element={<UserPage />}>
              <Route path='/user/token' element={<UserToken />} />
              <Route path='/user/profile' element={<UserProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
