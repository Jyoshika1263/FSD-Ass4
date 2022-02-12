import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Components from "./Components";
import Button from './Button';

const App=()=> {
  return (
    <div>
    <Button >
    <Components  yoe={2001} /> 
    </Button>
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById("root")
);