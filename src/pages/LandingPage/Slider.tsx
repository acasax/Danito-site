import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import {
  DotContainer,
  DotContainerElements,
  SliderContainer,
  SliderElementContainer,
  SliderElementContentContainer,
  SliderElementContentImg,
  SliderElementContentVideo
} from './style'
import { useSelector } from 'react-redux'
import { _selectorAllSliderElements } from 'store/SiteData/helpers'
import { TSliderElements } from 'store/SiteData/d'

const AutoPlaySwipeableViews = autoPlay(SliderElementContentContainer)

/**
 *
 * About component
 *
 * @author SaxDev 03.01.2022
 *
 * This component is a Slider of image and video.
 * On website is located on landing page just below the nav bar like first section
 *
 * Update component
 *
 * @author SaxDev 03.14.2022
 *
 * Fix image height and add danito images
 *
 * */

const Slider = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const sliderElements = useSelector(_selectorAllSliderElements)

  const handleStepChange = (sliderStep: number) => {
    setActiveStep(sliderStep)
  }

  return (
        <SliderContainer>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {sliderElements.map((element: TSliderElements, key: number) => (
                    <SliderElementContainer key={key}>
                        {Math.abs(activeStep - key) <= 2
                          ? (
                                <SliderElementContainer>
                                    {element.isVideo
                                      ? (
                                            <SliderElementContentVideo muted={true} autoPlay={true} src={element.path}/>
                                        )
                                      : (
                                            <SliderElementContentImg src={element.path} alt={element.label}/>
                                        )}
                                </SliderElementContainer>
                            )
                          : null}
                    </SliderElementContainer>
                ))}
            </AutoPlaySwipeableViews>
            <DotContainer>
                <DotContainerElements isActive={activeStep === 0} onClick={() => setActiveStep(0)}/>
                <DotContainerElements isActive={activeStep === 1} onClick={() => setActiveStep(1)}/>
                <DotContainerElements isActive={activeStep === 2} onClick={() => setActiveStep(2)}/>
                <DotContainerElements isActive={activeStep === 3} onClick={() => setActiveStep(3)}/>
                <DotContainerElements isActive={activeStep === 4} onClick={() => setActiveStep(4)}/>
                <DotContainerElements isActive={activeStep === 5} onClick={() => setActiveStep(5)}/>
            </DotContainer>
        </SliderContainer>
  )
}

export default Slider
