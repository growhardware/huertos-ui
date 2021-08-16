import React from 'react';
import './App.css'
// import { AuthButton } from './context/context'
import { ProvideAuth } from "./hooks/use-auth.js"
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './pages/_main'



function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <Main/>
      </Router>
    </ProvideAuth>
  );
}

export default App