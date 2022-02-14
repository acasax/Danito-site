import React from 'react'
import '../../../styles/LineAnimation/LineAnimation.css'
import { TLiveAnimation } from './d'

const LineAnimation = ({ header1, scroll, scrollY }: TLiveAnimation) => {
  return (
        <div className="LineAnimation">
            <div className="LineAnimation__container">
                <h2 className={scroll >= scrollY ? 'LineAnimation__headingVidible' : 'LineAnimation__headingHiden'}>
                    {header1}
                </h2>
                <div className={scroll >= scrollY ? 'LineAnimation__lineVisible' : 'LineAnimation__lineHiden'}></div>
            </div>
        </div>
  )
}

export default LineAnimation
