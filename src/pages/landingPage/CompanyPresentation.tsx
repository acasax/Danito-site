import React, { useContext, useState } from 'react'
import '../../styles/CompanyPresentation/CompanyPresentation.css'
import LineAnimation from 'components/lineAnimation'
import {
  CompanyPresentationButton,
  CompanyPresentationContainer,
  CompanyPresentationContentContainer,
  CompanyPresentationImage,
  CompanyPresentationSelectedImage,
  CompanyPresentationVideoContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import BackgroundImage from 'constants/companyPresentation/2.png'
import Backdrop from '@mui/material/Backdrop'
// @ts-ignore
import link from 'constants/companyPresentation/Video.mp4'
import { Translate } from '../../translate/data'

/**
 *
 * About Component
 * @author SaxDev 03.02.2022
 *
 * This component is part od landing page.
 * Display a bottom to see video of company presentation
 *
 * Update component
 * @author SaxDev 03.14.2022
 *
 * Make modal to display video
 *
 */

const CompanyPresentation = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const [open, setOpen] = useState(false)

  const handleOpenVideoModal = () => {
    setOpen(!open)
  }

  return (
        <CompanyPresentationContainer>
            <CompanyPresentationImage
                src={BackgroundImage}
                alt="danito presentation"
            />
            <CompanyPresentationContentContainer>
                <LineAnimation
                    header={Translate.COMPANY_PRESENTATION_TEXT}
                    scroll={scroll}
                    scrollY={0}
                    backgroundColor={'transparent'}
                    fontSize={40}
                />
                <CompanyPresentationButton
                    scaleTransform={scroll >= 0}
                    onClick={handleOpenVideoModal}
                >
                    {Translate.COMPANY_PRESENTATION_SEE_VIDEO}
                </CompanyPresentationButton>
            </CompanyPresentationContentContainer>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleOpenVideoModal}
            />
            {open
              ? (
                    <CompanyPresentationVideoContainer>
                        <CompanyPresentationSelectedImage muted={true} autoPlay={true} src={link}/>
                    </CompanyPresentationVideoContainer>
                )
              : null}
        </CompanyPresentationContainer>
  )
}

export default CompanyPresentation
