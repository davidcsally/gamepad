import React from 'react'
import { number } from "@storybook/addon-knobs";
import styled from 'styled-components'

import { Facebuttons, MappedProController } from '.'
import { withGamepad } from '../../hocs/withGamepad';
import { quad } from '../../styles/colors';
import { withMargin } from '../../styleHocs/withMargin';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${quad};
`

export const Normal = () => <Facebuttons />

const WrappedFacebuttons = withMargin(withGamepad(Facebuttons), { margin: '0 auto' })

export const WithGamepad = () => (
  <Background>
    <WrappedFacebuttons />
  </Background>
)

const WrappedCluster = withGamepad(MappedProController)

export const WithCluster = () => (
  <Background>
    <WrappedCluster />
  </Background>
)



export default {
  component: Facebuttons,
  title: 'Facebuttons'
}
