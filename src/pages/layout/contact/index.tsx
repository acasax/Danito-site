import React from 'react'
import '../../../styles/Kontakt/Kontakt.css'
import kontaktImg from '../../../constants/img/showRoom/19.jpg'
import LineAnimation from 'components/lineAnimation'
import Footer from 'components/footer'

const Contact = ({ scroll }: any) => {
  return (
        <div className="Kontakt">
            <div className="Kontakt__container">
                <img src={kontaktImg} alt="kontakt cover img"/>
                <LineAnimation header={'Contact'} scroll={scroll} scrollY={200}/>
                <Footer/>
            </div>
        </div>
  )
}

export default Contact
