import React from 'react'
import {
  FooterContainer,
  FooterFirstPartCell,
  FooterFirstPartContainer,
  FooterFirstPartRow,
  FooterSecondPartContainer
} from './style'
import RoomIcon from '@mui/icons-material/Room'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import LanguageIcon from '@mui/icons-material/Language'

const Footer = () => {
  return (
        <FooterContainer>
            <FooterFirstPartContainer>
                <FooterFirstPartRow>
                    <FooterFirstPartCell>
                        <h1>Links</h1>
                    </FooterFirstPartCell>
                    <FooterFirstPartCell>
                        <h1>Kontak informacije</h1>
                    </FooterFirstPartCell>
                    <FooterFirstPartCell>
                        <h1>Radno vreme</h1>
                    </FooterFirstPartCell>
                </FooterFirstPartRow>
                <FooterFirstPartRow>
                    <FooterFirstPartCell>
                        <p>Početna</p>
                        <p>O Nama</p>
                        <p>Galerija</p>
                        <p>Kontakt</p>
                    </FooterFirstPartCell>
                    <FooterFirstPartCell>
                        <div>
                            <div>
                                <RoomIcon />
                                <a
                                    href="https://www.google.rs/maps/place/%C5%BDarka+Zrenjanina+114,+Pan%C4%8Devo+260000/@44.8576638,20.6522046,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7ed857157abf:0x47141fd5145e027d!8m2!3d44.85766!4d20.6543933"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Žarka Zrenjanina 114, 26000 Pančevo
                                </a>
                            </div>
                            <div >
                                <LocalPhoneIcon />
                                <a href="tel:013-367-700">013 367 700</a>
                            </div>
                            <div >
                                <MailIcon />
                                <p>office@danito.rs</p>
                            </div>
                            <div >
                                <LanguageIcon />
                                <a href="https://www.danito.rs">https://www.danito.rs</a>
                            </div>
                        </div>
                    </FooterFirstPartCell>
                    <FooterFirstPartCell>
                        <FooterFirstPartRow>
                            <FooterFirstPartCell>
                                <p>Subota: 09:00 - 13:00</p>
                                <p>Subota: 09:00 - 13:00</p>
                                <p>Subota: 09:00 - 13:00</p>
                                <p>Subota: 09:00 - 13:00</p>
                            </FooterFirstPartCell>
                            <FooterFirstPartCell>
                                <p>Subota: 09:00 - 13:00</p>
                                <p>Subota: 09:00 - 13:00</p>
                                <p>Subota: 09:00 - 13:00</p>
                            </FooterFirstPartCell>
                        </FooterFirstPartRow>
                    </FooterFirstPartCell>
                </FooterFirstPartRow>
            </FooterFirstPartContainer>
            <FooterSecondPartContainer>
                <p style={{ color: 'white' }}>Radi</p>
            </FooterSecondPartContainer>
        </FooterContainer>
  )
}

export default Footer
