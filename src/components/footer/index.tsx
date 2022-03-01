import React from 'react'
import {
  FooterContainer,
  FooterFirstPartCell,
  FooterFirstPartCellHeaderText,
  FooterFirstPartCellText,
  FooterFirstPartContainer,
  FooterFirstPartImagePartContainer,
  FooterFirstPartRow,
  FooterFirstPartTextContainer,
  FooterSecondPartContainer,
  FooterSecondPartLinkText,
  FooterSecondPartText
} from './style'
import { Styles } from 'constants/StyleConstants'
import RoomIcon from '@mui/icons-material/Room'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import LanguageIcon from '@mui/icons-material/Language'
import LogoComponent from '../logo'

const Footer = () => {
  return (
        <FooterContainer>
            <FooterFirstPartContainer>
                <FooterFirstPartRow>
                    <FooterFirstPartImagePartContainer>
                        <LogoComponent
                            fontColor={Styles.Colours.PALETTE.DANITO._darkGray}
                            imgSize={90}
                            headerTextFontSize={30}
                            headerSubTextFontSize={20}
                        />
                    </FooterFirstPartImagePartContainer>
                    <FooterFirstPartCell>
                        <FooterFirstPartTextContainer>
                            <FooterFirstPartCellHeaderText>Linkovi</FooterFirstPartCellHeaderText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer>
                            <FooterFirstPartCellText href="/">- Početna</FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer>
                            <FooterFirstPartCellText href="/onama">- O Nama</FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer>
                            <FooterFirstPartCellText href="/galerija">- Galerija</FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer>
                            <FooterFirstPartCellText href="/kontakt">- Kontakt</FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                    </FooterFirstPartCell>
                    <FooterFirstPartCell>
                        <FooterFirstPartTextContainer
                            minWidth={370}
                        >
                            <FooterFirstPartCellHeaderText>Kontak informacije</FooterFirstPartCellHeaderText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer
                            minWidth={370}
                        >
                            <RoomIcon/>
                            <FooterFirstPartCellText
                                paddingLeft={7}
                                href="https://www.google.rs/maps/place/%C5%BDarka+Zrenjanina+114,+Pan%C4%8Devo+260000/@44.8576638,20.6522046,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7ed857157abf:0x47141fd5145e027d!8m2!3d44.85766!4d20.6543933"
                                target="_blank"
                                rel="noreferrer">
                                Žarka Zrenjanina 114, 26000 Pančevo
                            </FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer
                            minWidth={370}
                        >
                            <LocalPhoneIcon/>
                            <FooterFirstPartCellText
                                paddingLeft={7}
                                href="tel:013-367-700">
                                013 367 700
                            </FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer
                            minWidth={370}
                        >
                            <MailIcon/>
                            <FooterFirstPartCellText
                                paddingLeft={7}>
                                office@danito.rs
                            </FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartTextContainer
                            minWidth={370}
                        >
                            <LanguageIcon/>
                            <FooterFirstPartCellText
                                paddingLeft={7}
                                href="https://www.danito.rs">
                                https://www.danito.rs
                            </FooterFirstPartCellText>
                        </FooterFirstPartTextContainer>
                    </FooterFirstPartCell>
                    <FooterFirstPartCell>
                        <FooterFirstPartTextContainer
                            minWidth={290}
                        >
                            <FooterFirstPartCellHeaderText>Radno vreme</FooterFirstPartCellHeaderText>
                        </FooterFirstPartTextContainer>
                        <FooterFirstPartCell>
                            <FooterFirstPartTextContainer
                                minWidth={290}
                            >
                                <FooterFirstPartCellText>Ponedeljak - Petak: 08:00 - 17:00</FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer
                                minWidth={290}
                            >
                                <FooterFirstPartCellText>Subota: 09:00 - 13:00</FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer
                                minWidth={290}
                            >
                                <FooterFirstPartCellText>Nedeljom ne radimo</FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                        </FooterFirstPartCell>
                    </FooterFirstPartCell>
                </FooterFirstPartRow>
            </FooterFirstPartContainer>
            <FooterSecondPartContainer>
                <FooterSecondPartText>
                    Copyright Danito Constraction All Right Reserved
                    <FooterSecondPartLinkText href={'https://github.com/acasax'}>SaxDev</FooterSecondPartLinkText>
                </FooterSecondPartText>
                <FooterSecondPartText>
                    <FooterSecondPartLinkText>PRIVACY POLICY</FooterSecondPartLinkText>
                    <FooterSecondPartLinkText>COOKIES POLICY</FooterSecondPartLinkText>
                    <FooterSecondPartLinkText>GDPR</FooterSecondPartLinkText>
                </FooterSecondPartText>
            </FooterSecondPartContainer>
        </FooterContainer>
  )
}

export default Footer
