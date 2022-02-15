import React from 'react'
import { TLiveAnimation } from './d'
import {
  LiveAnimationContainer,
  LiveAnimationContentContainer,
  LiveAnimationHeaderBottomLine,
  LiveAnimationHeading
} from './style'

const LineAnimation = ({ header1, scroll, scrollY }: TLiveAnimation) => {
  return (
        <LiveAnimationContainer>
            <LiveAnimationContentContainer>
                <LiveAnimationHeading scale={scroll >= scrollY}>
                    {header1}
                </LiveAnimationHeading>
                <LiveAnimationHeaderBottomLine scale={scroll >= scrollY}/>
            </LiveAnimationContentContainer>
        </LiveAnimationContainer>
  )
}

export default LineAnimation
