const gamepadconnected = 'gamepadconnected'
const gamepaddisconnected = 'gamepaddisconnected'

export class Gamepad {
  gamepad = null
  isConnected: boolean = false

  constructor(startPolling) {
    this.onConnect(startPolling)
  }

  onConnect = (startPolling) => {
    window.addEventListener(gamepadconnected, (e: GamepadEvent) => {
      this.gamepad = navigator.getGamepads()[e.gamepad.index]
      this.isConnected = true
      startPolling()
    })
  }

  onDisconnect = () => {
    window.addEventListener(gamepaddisconnected, function(e: GamepadEvent) {
      console.log('disconnected :{')
      this.gamepad = null;
    });
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
