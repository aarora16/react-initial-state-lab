// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount,
    }
  }
  
  render() {
    const makeBombGoBoom = () => {
      if (this.state.secondsLeft === 0) {
        return 'Boom!'
      } else {
        return `${this.state.secondsLeft} seconds left before I go boom!`
      }
    }

    return (
      <div>
        {makeBombGoBoom()}
      </div>
    )
  }
}

export default Bomb;