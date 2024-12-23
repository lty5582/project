import { Component, useState } from 'react';
import './App.css';

// function App() {
//   const [counter,setcounter] = useState(0) ;
//   return (
//     <>
//     <Count counter={counter}
//           hello={"hello"}
//           array= {[1,2,3, "안녕하세요"]}
//           />
//     <button onClick={ () => {
//       setcounter((prev) => prev + 1)
//     }}
//     >
//       +
//     </button>
//     <button onClick={ () => {
//     setcounter((prev) => prev - 1)
//     }}
//     >
//       -
//     </button>
//   </>
   
//   );
// }

// function Count ({array, counter , hello}) {
//   console.log("array",array) 
//   console.log("counter",counter)
//   console.log("hello", hello)
//   return <div>counter : {counter}</div>;
// }

class ClassApp extends Component {
  state = { counter: 1}

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() { 
    return (
      <>
       <Count counter={this.state.counter}/>
       <PlusButton incrementCounter={this.incrementCounter}/>
       <MinusButton decrementCounter={this.decrementCounter}/>
      </>
    )
  }
}

class PlusButton extends Component {
  render(){
    return(
      <button onClick={this.props.incrementCounter}>
            +
          </button>
    )
  }
}

class MinusButton extends Component {
  render(){
    return(
      <button onClick={this.props.decrementCounter}>
            -
          </button>
    )
  }
}



class Count extends Component {
  render() {
    return <div>Counter: {this.props.counter}</div>
  }
}

export default ClassApp;
