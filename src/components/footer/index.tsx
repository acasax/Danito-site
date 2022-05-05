import React from 'react'
import {
  FooterContainer,
  FooterContentContainer,
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
import LogoComponent from '../logo'
import { Translate } from '../../translate/data'

/**
 *
 * About Component
 *
 * @author SaxDev 03.01.2022
 *
 * This is component for display important information about company.
 * Located is on bottom of site
 *
 * */

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
                    <FooterContentContainer>
                        <FooterFirstPartCell>
                            <FooterFirstPartTextContainer>
                                <FooterFirstPartCellHeaderText>{Translate.FOOTER_LINK}</FooterFirstPartCellHeaderText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer>
                                <FooterFirstPartCellText
                                    href="/">{Translate.FOOTER_HOME_LINK_LABEL}</FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer>
                                <FooterFirstPartCellText
                                    href="/onama">{Translate.FOOTER_ABOUT_LINK_LABEL}</FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer>
                                <FooterFirstPartCellText
                                    href="/galerija">{Translate.FOOTER_GALLERY_LINK_LABEL}</FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer>
                                <FooterFirstPartCellText
                                    href="/kontakt">{Translate.FOOTER_CONTACT_LINK_LABEL}</FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                        </FooterFirstPartCell>
                        <FooterFirstPartCell>
                            <FooterFirstPartTextContainer
                                minWidth={370}
                            >
                                <FooterFirstPartCellHeaderText>{Translate.FOOTER_CONTACT_INFO}</FooterFirstPartCellHeaderText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer
                                minWidth={370}
                            >
                                {/* <RoomIcon/> */}
                                <FooterFirstPartCellText
                                    href="https://www.google.rs/maps/place/%C5%BDarka+Zrenjanina+114,+Pan%C4%8Devo+260000/@44.8576638,20.6522046,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7ed857157abf:0x47141fd5145e027d!8m2!3d44.85766!4d20.6543933"
                                    target="_blank"
                                    rel="noreferrer">
                                    {Translate.FOOTER_ADDRESS}
                                </FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer
                                minWidth={370}
                            >
                                {/* <LocalPhoneIcon/> */}
                                <FooterFirstPartCellText
                                    href="tel:013-367-700">
                                    {Translate.FOOTER_PHONE}
                                </FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer
                                minWidth={370}
                            >
                                {/* <MailIcon/> */}
                                <FooterFirstPartCellText>
                                    {Translate.FOOTER_EMAIL}
                                </FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartTextContainer
                                minWidth={370}
                            >
                                {/* <LanguageIcon/> */}
                                <FooterFirstPartCellText
                                    href={Translate.FOOTER_WEBSITE}>
                                    {Translate.FOOTER_WEBSITE}
                                </FooterFirstPartCellText>
                            </FooterFirstPartTextContainer>
                        </FooterFirstPartCell>
                        <FooterFirstPartCell>
                            <FooterFirstPartTextContainer
                                minWidth={290}
                            >
                                <FooterFirstPartCellHeaderText>{Translate.FOOTER_WORK_HOUR}</FooterFirstPartCellHeaderText>
                            </FooterFirstPartTextContainer>
                            <FooterFirstPartCell>
                                <FooterFirstPartTextContainer
                                    minWidth={290}
                                >
                                    <FooterFirstPartCellText>{Translate.FOOTER_WORK_HOUR_WORKING_DAYS}</FooterFirstPartCellText>
                                </FooterFirstPartTextContainer>
                                <FooterFirstPartTextContainer
                                    minWidth={290}
                                >
                                    <FooterFirstPartCellText>{Translate.FOOTER_WORK_HOUR_WEEKEND_I}</FooterFirstPartCellText>
                                </FooterFirstPartTextContainer>
                                <FooterFirstPartTextContainer
                                    minWidth={290}
                                >
                                    <FooterFirstPartCellText>{Translate.FOOTER_WORK_HOUR_WEEKEND_II}</FooterFirstPartCellText>
                                </FooterFirstPartTextContainer>
                            </FooterFirstPartCell>
                        </FooterFirstPartCell>
                    </FooterContentContainer>
                </FooterFirstPartRow>
            </FooterFirstPartContainer>
            <FooterSecondPartContainer>
                <FooterSecondPartText>
                    {Translate.FOOTER_COPY_RIGHT_TEXT}
                    <FooterSecondPartLinkText href={'https://github.com/acasax'}>SaxDev</FooterSecondPartLinkText>
                </FooterSecondPartText>
                <FooterSecondPartText>
                    <FooterSecondPartLinkText>{Translate.FOOTER_PRIVACY_POLICY}</FooterSecondPartLinkText>
                    <FooterSecondPartLinkText>{Translate.FOOTER_COOKIES_POLICY}</FooterSecondPartLinkText>
                    <FooterSecondPartLinkText>{Translate.FOOTER_GDPR}</FooterSecondPartLinkText>
                </FooterSecondPartText>
            </FooterSecondPartContainer>
        </FooterContainer>
  )
}

export default Footer
