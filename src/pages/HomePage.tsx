import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Proizvodi from './pages/products'
import '../styles/AppLang/AppLang.css'
import ScrollToTop from '../ScrollToTop'

import NavFirstPart from './components/NavBar/NavFirstPart'
import NavSecondPart from './components/NavBar/NavSecondPart'
import NavProduct from './components/NavBar/NavProductsPart'

import LandingPage from './pages/LandingPage'
import About from './pages/about'
import Gallery from './pages/gallery'
import TipsPage from './pages/tipsPage/TipsPage'
import Contact from './pages/contact'

const HomePage = () => {
  const [scroll, setScroll] = useState(0)
  const [navRightOpen, setNavRightOpen] = useState(false)

  const [pathTo, setPathTo] = useState('false')
  const [pageName, setPageName] = useState('')

  // const [pathToTipsPage, setPathToTipsPage] = useState('')
  const [tipsData, setTipsData] = useState('')

  const [data, setData] = useState('')

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY)
    }
  }, [scroll])

  return (
        <div className="AppLang">
            <Router>
                <ScrollToTop/>
                <NavFirstPart/>
                <div className="AppLang__containerFirst">
                    <NavProduct
                        setData={setData}
                        setPageName={setPageName}
                        pathTo={pathTo}
                        setPathTo={setPathTo}
                        navRightOpen={navRightOpen}
                    />
                    <div className="AppLang__right">
                        <NavSecondPart navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen}/>
                        <Switch>
                            <Route path={pathTo}>
                                <Proizvodi data={data} pageName={pageName} scroll={scroll}/>
                            </Route>
                            <Route path="/galerija">
                                <Gallery scroll={scroll}/>
                            </Route>
                            <Route path="/onama">
                                <About scroll={scroll}/>
                            </Route>
                            <Route path="/TipsPage">
                                <TipsPage scroll={scroll} tipsData={tipsData}/>
                            </Route>
                            <Route path="/kontakt">
                                <Contact scroll={scroll}/>
                            </Route>
                            <Route path="/">
                                <LandingPage
                                    setPageName={setPageName}
                                    pathTo={pathTo}
                                    setPathTo={setPathTo}
                                    setTipsData={setTipsData}
                                    setData={setData}
                                    // setPathToTipsPage={setPathToTipsPage}
                                    scroll={scroll}
                                    pageName={pageName}
                                />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
  )
}

export default HomePage
