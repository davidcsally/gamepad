import React from 'react'
import styled from 'styled-components'

import { Vibration } from '../icons/Vibration'
import { withGamepadProps, withGamepad } from '../../hocs/withGamepad'

const Button = styled.button`
  border-width: 0;
  background-color: transparent;
  width: 100%;
`

const StyledVibration = styled(Vibration)`
  height: 100%;
  width: 100%;
`

export const Vibrator: React.FC<withGamepadProps> = ({ vibrate }) => {
  return (
    <Button aria-label="Press to vibrate!" onClick={() => vibrate({ duration: 1000 })}>
      <StyledVibration />
    </Button>
  )
}

export const ConnectedVibrator = withGamepad(Vibrator)
