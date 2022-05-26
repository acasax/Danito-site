import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { BackDrop, SpinnerContainer, SpinnerIcon } from './style'

type TSpinnerProps = {
    pulse?: boolean,
    size?: SizeProp
    timer?: number
    isCentred?: boolean
}

const SpinnerLoading = ({ pulse, size, isCentred = true }: TSpinnerProps) => {
  return (
      <>
          <BackDrop/>
          <SpinnerContainer isCentred={isCentred}>
              <SpinnerIcon icon={faSpinner} spin size={size || '4x'} pulse={pulse}/>
          </SpinnerContainer>
      </>

  )
}

export default SpinnerLoading
