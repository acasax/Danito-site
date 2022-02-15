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
 * This is component for display header of sections with scale transition of text and bottom line
 *
 * header - text to display
 * scroll - start position mostly 0 of webpage on y wasp
 * scrollY - y wasp of element on webpage
 *
 * */

const LineAnimation = ({ header, scroll, scrollY }: TLiveAnimation) => {
  return (
        <LiveAnimationContainer>
            <LiveAnimationContentContainer>
                <LiveAnimationHeading scale={scroll >= scrollY}>
                    {header}
                </LiveAnimationHeading>
                <LiveAnimationHeaderBottomLine scale={scroll >= scrollY}/>
            </LiveAnimationContentContainer>
        </LiveAnimationContainer>
  )
}

export default LineAnimation
