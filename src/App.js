import React from 'react';
import './App.css';
import MinFooter from "./components/MinFooter"
import MinMain from "./components/MinMain"
import MinHeader from "./components/MinHeader"
import Oppmuntring from "./components/Oppmuntring"
import HTMLSirkel from "./components/HTMLSirkel"
import SvgSirkel from "./components/SvgSirkel"
//import CanvasSirkel from "./components/CanvasSirkel"

function App() {
  return (
    <div>
        //oppgave_1
        <h1>React is fun</h1>
        <p>I´m really looking forward to learning more React stuff</p>
        <hr/>
        //oppgave_2
      <div className="minSide">
          <MinHeader/>
          <MinMain/>
          <MinFooter/>
          
      </div>  
      <hr/>
      //oppgave_3
      <div className="oppmuntring">
      <h1>I dag skal vi jobbe med React. Jeg trenger litt oppmuntring</h1>
        <Oppmuntring />
        <hr/>
      </div>
      //oppgave_4
      <div>
        <HTMLSirkel/>  
        <SvgSirkel/> 
        
      </div>
    </div>
  );
}

export default App;
