import React from 'react'
import { Application } from './style'
import { Provider } from 'react-redux'
import store from './store'
import SiteNavigation from './siteNavigation'

const App: React.FC = () => {
  return (
        <Provider store={store}>
            <Application>
                <SiteNavigation/>
            </Application>
        </Provider>
  )
}

export default App
