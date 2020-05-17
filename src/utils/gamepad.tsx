const gamepadconnected = 'gamepadconnected'
const gamepaddisconnected = 'gamepaddisconnected'

export class Gamepad {
  gamepad = null

  constructor() {
    this.onConnect()
  }

  onConnect = () => {
    window.addEventListener(gamepadconnected, (e: GamepadEvent) => {
      this.gamepad = navigator.getGamepads()[e.gamepad.index]
    })
  }

  onDisconnect = () => {
    window.addEventListener(gamepaddisconnected, function(e: GamepadEvent) {
      this.gamepad = null;
    });
  }

  getAxis1 = () => {
    return this.gamepad?.axes?.[0]
  }

  getAxis2 = () => {
    return this.gamepad?.axes?.[0]
  }
}



/**
 * Add "gamepadconnected" window listener.
 */
export const connectGamepad = (callback?) => {
  window.addEventListener(gamepadconnected, (e: GamepadEvent) => {
    return navigator.getGamepads()[e.gamepad.index] 
  });
}

/**
 * Add "gamepaddisconnected" window listener.
 */
export const gamepadDisconnected = () => {
  window.addEventListener(gamepaddisconnected, function(e: GamepadEvent) {
    return null;
  });
}
