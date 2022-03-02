import React from 'react'
import { TLiveAnimation } from './d'
import {
  LiveAnimationContainer,
  LiveAnimationContentContainer,
  LiveAnimationHeaderBottomLine,
  LiveAnimationHeading
} from './style'

/**
 * About Component
 *
 * @author saxDev 02.14.2022
 *
 * This is component for display header of sections with scale transition of text and bottom line
 *
 * header - text to display
 * scroll - start position mostly 0 of webpage on y wasp
 * scrollY - y wasp of element on webpage
 *
 *
 * Update
 * @author SaxDev 03.02.2022
 *
 * Update component that she could to use on image in background ( Company presentation component )
 *
 * backgroundColor - color of background of component
 * fontSize - font size od text of component
 *
 * */

const LineAnimation = ({ header, scroll, scrollY, backgroundColor, fontSize }: TLiveAnimation) => {
  return (
        <LiveAnimationContainer backgroundColor={backgroundColor}>
            <LiveAnimationContentContainer>
                <LiveAnimationHeading scaleTransform={scroll >= scrollY} fontSize={fontSize}>
                    {header}
                </LiveAnimationHeading>
                <LiveAnimationHeaderBottomLine scaleTransform={scroll >= scrollY}/>
            </LiveAnimationContentContainer>
        </LiveAnimationContainer>
  )
}

export default LineAnimation
