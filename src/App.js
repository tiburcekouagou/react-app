import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Incrémenter</button>
//       <span>{count}</span>
//       <button onClick={() => setCount(count - 1)}>Décrémenter</button>
//     </div>
//   );
// }
class Example extends React.Component {
  // Declare a new state variable, which we'll call "count"
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      username: "Toto",
    }
  }

  render() {

    return (
      <div>
        <button onClick={() => this.setState({counts: this.state.count + 1})}>Incrémenter</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({counts: this.state.count - 1})}>Décrémenter</button>
      </div>
    );
  }
}


export default Example;
