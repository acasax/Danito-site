import React from 'react'
import '../../../styles/TipsPage/TipsPage.css'
import LineAnimation from 'components/lineAnimation'

const TipsPage = ({ tipsData, scroll }: any) => {
  return (
        <div className="TipsPage">
            <div className="TipsPage__container">
                <div className="TipsPage__imgContainer">
                    <img src={tipsData.coverImg} alt="some img"/>
                </div>
                <LineAnimation header={tipsData.name} scroll={scroll} scrollY={200}/>
                <div className="TipsPage__articleText">
                    <h3>{tipsData.header}</h3>
                    <div className="TipsPage__text">
                        {tipsData.text.map((data, key) => {
                          return <p key={key}>{data}</p>
                        })}
                    </div>
                    <p className="TipsPage__datePosted">{tipsData.date}</p>
                </div>
            </div>
        </div>
  )
}

export default TipsPage
