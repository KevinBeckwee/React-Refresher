import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react/cjs/react.production.min';
//component files
import TodoContainer from './components/TodoContainer';

ReactDOM.render(<StrictMode><TodoContainer /></StrictMode>, document.getElementById("root"))