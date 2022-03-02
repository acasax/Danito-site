import React from 'react'
import '../../../styles/CompanyPresentation/CompanyPresentation.css'
import LineAnimation from 'components/lineAnimation'
import {
  CompanyPresentationButton,
  CompanyPresentationContainer,
  CompanyPresentationContentContainer,
  CompanyPresentationImage
} from '../style'

/**
 *
 * About Component
 *
 * @author SaxDev 03.02.2022
 *
 * This component is part od landing page.
 *
 * Display a bottom to see video of company presentation
 *
 */

const CompanyPresentation = ({ scroll, scrollY }: any) => {
  return (
        <CompanyPresentationContainer>
            <CompanyPresentationImage
                src="https://www.drutex.eu/static/layout2017/img/banery/prezentacja-firmowa.jpg"
                alt="danito presentation"
            />
            <CompanyPresentationContentContainer>
                <LineAnimation
                    header="Company presentation"
                    scroll={scroll}
                    scrollY={scrollY}
                    backgroundColor={'transparent'}
                    fontSize={40}
                />
                <CompanyPresentationButton
                    scaleTransform={scroll >= scrollY}
                >
                    SEE VIDEO
                </CompanyPresentationButton>
            </CompanyPresentationContentContainer>
        </CompanyPresentationContainer>
  )
}

export default CompanyPresentation
