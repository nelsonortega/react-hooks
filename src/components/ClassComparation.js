import React from 'react'

class ClassStateExample extends React.Component {
  constructor() {
    super()

    this.state = { count: 5 }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="App-header">
        <button onClick={this.decrement}>-</button>
        {this.state.count}
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default ClassStateExample

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()