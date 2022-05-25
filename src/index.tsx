import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AboutPage, DashboardPage, UserPage, WelcomePage } from './pages';
import { UserProfile } from './components';
import { UserToken } from './components/user/UserToken';
import { defaultUserDetails, UserContext } from './contexts';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <UserContext.Provider value={defaultUserDetails}>
      <React.StrictMode>
        <CssBaseline />
        <HashRouter basename='/'>
          <Routes>
            <Route path="/" element={<Navigate to="/about" /> } />
            <Route path="/" element={<WelcomePage />}>
              <Route path="/about" element={<AboutPage />} />
              <Route path='/app' element={<App />} >
                <Route path="/app/dashboard" element={<DashboardPage />} />
                <Route path='/app/user' element={<UserPage />}>
                  <Route path='/app/user/token' element={<UserToken />} />
                  <Route path='/app/user/profile' element={<UserProfile />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </UserContext.Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
