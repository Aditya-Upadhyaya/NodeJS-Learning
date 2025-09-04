import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react'
import Scroll from './components/Scroll';
import UseArrayHookImpl from './components/UseArrayHookImpl';

function App() {
  
  return (
    <div className="App">
      {/* <Scroll></Scroll> */}
      <UseArrayHookImpl></UseArrayHookImpl>
    </div>
  );
}

export default App;
