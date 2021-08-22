import React from 'react';
import './App.css'
// import { AuthButton } from './context/context'
import { ProvideAuth } from "./hooks/useAuth.js"
import { AppProvider } from './contexts/AppContext'
import AppRouter from './routes'
import MainPage from './pages/Main'


function App(props) {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App