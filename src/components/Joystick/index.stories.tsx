import React from 'react'
import { number } from "@storybook/addon-knobs";

import { Props, Joystick } from '.'
import { withGamepad } from '../../hocs/withGamepad';

export default {
  component: Joystick,
  title: 'Joystick'
}

export const Normal = () => <Joystick xAxis={number('top: ', 0)} yAxis={number('left: ', 0)} />

const WrappedJoystick = withGamepad(Joystick)
export const WithGamepad = () => <WrappedJoystick />
