import React from 'react'
import { Application } from './style'
import { Provider } from 'react-redux'
import store from './store'
import SiteNavigation from './siteNavigation'
import SiteNavigationContainer from './siteNavigation/context'

const App: React.FC = () => {
  return (
        <Provider store={store}>
            <Application>
                <SiteNavigationContainer>
                    <SiteNavigation/>
                </SiteNavigationContainer>
            </Application>
        </Provider>
  )
}

export default App
