import React from 'react';
import './App.css'
// import { AuthButton } from './context/context'
import { AppProvider } from './contexts/AppContext'
import AppRouter from './routes'


function App(props) {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App