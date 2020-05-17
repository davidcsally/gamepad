import React, { useState } from 'react'
import styled from 'styled-components'

import { Gamepad } from '../../utils/gamepad';

// const pxToRem
// 0.125rem
// 0.0625rem

interface Props {
  top: number;
  left: number;
  axes: any;
}

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

const Dot = styled.div.attrs((props) => ({
  style: {
    top: `${props.top / 2}%`,
    left: `${props.left / 2}%`,
  }
}))`
  width: 1rem;
  height: 1rem;
  background-color: black;
  position: relative;
  border-radius: 50%;
  z-index: 2;
`;

export const Joystick: React.FC<Props> = ({ top, left, axes }) => {
  return (
    <div>
      <p>Axis 1: {axes[0]}</p>
      <p>Axis 2: {axes[1]}</p>
      <p>Top: {top}</p>
      <p>Left: {left}</p>
      <Container>
        <Dot top={axes[1] * 100} left={axes[0] * 100} />
      </Container>
    </div>
  )
}

export interface HocProps {
  top: number;
  left: number;
  axes: any;
}

export function withGamepad<T extends HocProps>(WrappedComponent: React.FC<T>) {
  return class extends React.Component<T & HocProps, { gamepad: any }> {
    gamepad: null | any

    constructor(props) {
      super(props)

      this.gamepad = null

      this.state = { gamepad: null }
    }

    componentDidMount() {
      window.requestAnimationFrame(() => { this.tick() })
      this.gamepad = new Gamepad()
    }

    tick = () => {
      window.requestAnimationFrame(() => { this.tick() })
      if (this.gamepad.isConnected) {
        this.setState({ gamepad: window.navigator.getGamepads()[0] })
      }
    }

    render() {
      const { gamepad } = this.state
      const axis1 = gamepad?.axes[0]
      const axis2 = gamepad?.axes[1]

      return <WrappedComponent {...this.props} axes={[axis1, axis2]} top={0} left={0} />
    }
  }
}
