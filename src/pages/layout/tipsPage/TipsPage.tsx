import React from 'react'
import '../../../styles/TipsPage/TipsPage.css'
import LineAnimation from 'components/lineAnimation'
import Footer from '../../../components/footer'
import { useSelector } from 'react-redux'
import { _selectorSelectedTip } from 'store/SiteData/helpers'

const TipsPage = ({ tipsData, scroll }: any) => {
  const selectedTip = useSelector(_selectorSelectedTip)

  return (
        <div className="TipsPage">
            <div className="TipsPage__container">
                <div className="TipsPage__imgContainer">
                    <img src={selectedTip[0].coverImg} alt="some img"/>
                </div>
                <LineAnimation header={selectedTip[0].landingPageText} scroll={scroll} scrollY={200}/>
                <div className="TipsPage__articleText">
                    <h3>{selectedTip[0].landingPageText}</h3>
                    <div className="TipsPage__text">
                        {selectedTip[0].text.map((data, key) => {
                          return <p key={key}>{data}</p>
                        })}
                    </div>
                    <p className="TipsPage__datePosted">{selectedTip[0].date}</p>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default TipsPage
