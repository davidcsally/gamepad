import React, { useState } from 'react'
import styled from 'styled-components'

import { Gamepad } from '../../utils/gamepad';

// const pxToRem
// 0.125rem
// 0.0625rem

const Container = styled.div`
  height: 10rem;
  width: 10rem;
  border: 0.125rem solid black;
  border-radius: 50%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Vertical Line */
  &:before {
    content: "";
    height: 100%;
    width: 2px;
    background-color: blue;
    position: absolute;
  }

  /* Horizontal Line */
  &:after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: red;
    position: absolute;
  }
`

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: black;
  position: relative;
  border-radius: 50%;
  z-index: 2;

  top: ${({ top = 0 }) => top / 2}%;
  left: ${({ left = 0 }) => left / 2}%;
`;

export const Joystick = ({ top, left }) => {
  const [position, setPosition] = useState(0)

  return (
    <Container>
      <Dot top={top} left={left} />
    </Container>
  )
}

export const withGamepad = (WrappedComponent) => {
  return class extends React.Component {
    constructor() {
      
      this.state = {}
    }
    tick = () => {

    }

    render() {
      const gamepad = new Gamepad()
      const axis1 = gamepad.getAxis1()
      const axis2 = gamepad.getAxis2()
  
      return <WrappedComponent {...this.props} axes=[a] />
      // const gamepad = connectGamepad()  
    }
  }
}
