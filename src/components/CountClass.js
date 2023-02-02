import React, { Component } from 'react';
import '../css/counter.css';

class CountClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount () {
    console.log('Component mounted');
  }

  componentDidUpdate () {
    console.log('Component updated');
  }

  componentWillUnmount () {
    console.log('Component unmounted');
  }


  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className='boton-counter' onClick={() => this.setState({ count: this.state.count + this.props.amountIncrement })}>Add</button>
        <button className='boton-counter' onClick={() => this.setState({ count: this.state.count - this.props.amountDecrement })}>Subtract</button>
      </div>
    );
  }
}

export default CountClass;