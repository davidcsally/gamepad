import React from 'react'
import { number } from "@storybook/addon-knobs";

import { Joystick, withGamepad } from '.'

export default {
  component: Joystick,
  title: 'Joystick'
}

export const Normal = () => <Joystick top={number('top: ', 0)} left={number('left: ', 0)} />

const WrappedJoystick = withGamepad(Joystick)
export const WithGamepad = () => <WrappedJoystick />
