import React, { Component } from 'react'

import { Gamepad } from '../utils/gamepad'

export interface withGamepadProps {
  vibrate: ({ duration }) => void;
  xAxis?: number;
  yAxis?: number;
  buttons?: GamepadButton[];
}

export function withGamepad<T>(WrappedComponent: React.FC<T & withGamepadProps>) {
  return class extends Component<T, { gamepad: any }> {
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

    // can only be 'dual-rumble' or 'vibration', based on the gamepad plugged in and what it reports
    // docs: https://docs.google.com/document/d/1jPKzVRNzzU4dUsvLpSXm1VXPQZ8FP-0lKMT-R_p-s6g/edit
    vibrate = ({ duration = 250, weakMagnitude = 1, strongMagnitude = 1 }) => {
      const { gamepad } = this.state
      if (!gamepad) return

      gamepad.vibrationActuator?.playEffect('dual-rumble',
        {
          duration,
          weakMagnitude,
          strongMagnitude,
        }
      )
    }

    render() {
      const { gamepad } = this.state
      const xAxis = gamepad?.axes[0]
      const yAxis = gamepad?.axes[1]
      const buttons = gamepad?.buttons || []

      return (
        <WrappedComponent
          {...this.props}
          xAxis={xAxis}
          yAxis={yAxis}
          buttons={buttons}
          vibrate={this.vibrate}
        />
      )
    }
  }
}
