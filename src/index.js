import React from 'react';
import ReactDOM from 'react-dom';
import MultipleTag from './component/multiple-tag';
import RenderProps from './component/render-props';
import Hoc from './component/hoc';
import './index.css';

class Wrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    }
  }

  handleClick = () => {
    this.setState({
      a: this.state.a + 1,
    })
  }


  render () {
    return (
      <div className="app">

      </div>
    )
  }
}


const Div = (props) => {
  return <input type="text" {...props}/>
}

const Com = Hoc(Div);

ReactDOM.render(
  <div>
    <Com />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
