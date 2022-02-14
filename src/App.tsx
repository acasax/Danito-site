import React from 'react'
import { Application } from './style'
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage'

const App: React.FC = () => {
  return (
        <Application>
            <HomePage/>
        </Application>
  )
}

export default App
