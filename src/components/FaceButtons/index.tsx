import React from 'react'
import styled from 'styled-components'

import { ProController } from '../icons/ProController';

export interface Props {
  buttons?: GamepadButton[];
  className?: string;
}

const Container = styled.div`
  grid-area: ${({ gridArea = '1' }) => gridArea};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.75rem;
`

interface GButtonProps {
  button: GamepadButton;
  gridArea?: string;
  className?: string;
}

export const GButton: React.FC<GButtonProps> = ({ button = {}, gridArea }) => {
  const {
    pressed = 'Gamepad not found :(',
    touched = 'Gamepad not found :(',
    value = 'Gamepad not found :(',
  } = button

  return (
    <Container gridArea={gridArea}>
      <p>pressed: {pressed.toString()}</p>
      <p>touched: {touched.toString()}</p>
      <p>value: {value}</p>
    </Container>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". x x ."
    ". y a ."
    ". b b .";  
`

export const Facebuttons: React.FC<Props> = ({ className, buttons }) => {
  return (
    <Grid className={className}>
      <GButton button={buttons[0]} gridArea='b' />
      <GButton button={buttons[1]} gridArea='a' />
      <GButton button={buttons[2]} gridArea='y' />
      <GButton button={buttons[3]} gridArea='x' />
    </Grid>
  )
}

const CircleButton = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  border: 1px solid black;
  grid-area: ${({ gridArea }) => gridArea};
  margin: 0 auto;
  background-color: ${({ pressed }) => pressed ? 'red' : 'gray'};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const MappedProController: React.FC<Props> = ({ buttons = [] }) => {
  return (
    <ProController
      buttons={buttons.map((button) => button?.pressed || false)}
    />
  )
}
