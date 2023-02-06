import React, { Component } from 'react';
// import styles from '../css/counter.module.css';
import Button from '../elements/Boton';

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
        {/* <button className={styles.boton} onClick={() => this.setState({ count: this.state.count + this.props.amountIncrement })}>Add</button>
        <button className={styles.boton} onClick={() => this.setState({ count: this.state.count - this.props.amountDecrement })}>Subtract</button> */}
        <Button onClick={() => this.setState({ count: this.state.count + this.props.amountIncrement })}>Add</Button>
        <Button onClick={() => this.setState({ count: this.state.count - this.props.amountDecrement })}>Subtract</Button>
      </div>
    );
  }
}

export default CountClass;