import React from 'react'
import { Application } from './style'
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux'
import store from './store'

const App: React.FC = () => {
  return (
        <Provider store={store}>
            <Application>
                <HomePage/>
            </Application>
        </Provider>
  )
}

export default App
