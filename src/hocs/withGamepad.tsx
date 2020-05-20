import React, { Component } from 'react'

import { Gamepad } from '../utils/gamepad'

export interface HocProps {
  xAxis?: number;
  yAxis?: number;
  buttons?: GamepadButton[]
}

export function withGamepad<T>(WrappedComponent: React.FC<T & HocProps>) {
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
        />
      )
    }
  }
}
