import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Parent from './hooks/ref/forwardRef';
import Ref2 from './hooks/ref/ref2';
import UseEffectsss from './hooks/useEffect';
import './index.css';

ReactDOM.render(
  <UseEffectsss />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
