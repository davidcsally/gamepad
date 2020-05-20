import React from 'react'
import { number } from "@storybook/addon-knobs";
import styled from 'styled-components'

import { Joystick } from '.'
import { withGamepad } from '../../hocs/withGamepad';
import { quad } from '../../styles/colors';
import { withMargin } from '../../styleHocs/withMargin';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${quad};
`

export const Normal = () => <Joystick xAxis={number('top: ', 0)} yAxis={number('left: ', 0)} />

const WrappedJoystick = withMargin(withGamepad(Joystick), { margin: '0 auto' })

export const WithGamepad = () => (
  <Background>
    <WrappedJoystick />
  </Background>
)

export default {
  component: Joystick,
  title: 'Joystick'
}
