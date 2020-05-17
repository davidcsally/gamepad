import React from 'react'
import { number } from "@storybook/addon-knobs";

import { Joystick } from '.'

export default {
  component: Joystick,
  title: 'Joystick'
}

export const normal = () => <Joystick top={number('top: ', 0)} left={number('left: ', 0)} />
