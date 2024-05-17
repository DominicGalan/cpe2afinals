import React from 'react';
import './App.css';
import { useState } from "react";


function CalcButton({color, label, buttonClassName = "CalcButton", onClick}) {

  return (
    <button className= {buttonClassName} onClick={onClick} style={{ background: color }}>
      {label}
    </button>
  );
}

function YourName({display}) {
  return (
    <div className='MyName'>
      {display}
    </div>
  )
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  const[disp, setDisp] = useState("0");

  const[n1, setN1] = useState(null);
  const[n2, setN2] = useState(null);
  const[op, setOp] = useState(null);

  const clrClickHandler = () => {
    setDisp("0");
    setN1(null);
    setN2(null);
    setOp(null);
  }

  const equalClickHandler = () => {
    let result = null;

    if (op === "ADD") {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (op === "SUB") {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (op === "DIV") {
      result = parseFloat(n1) / parseFloat(n2);
    } else if (op === "MUL") {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (op === "EXP" && n1 !== null && n2 !== null) {
      result = Math.pow(parseFloat(n1), parseFloat(n2));
    } else if (op === "MOD" && n1 !== null && n2 !== null && parseFloat(n2) !== 0) {
      result = parseFloat(n1) % parseFloat(n2); 
    } else {
      result = ('Invalid Operation');
    }
    setDisp(result.toString());
    setN1(result.toString());
    setN2(null);
    setOp(null);
  }

  const numberClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (value === "0" && disp === "0") {
      return;
    }

    if (op === null) {
      if (n1 === null){
        setN1(value);
        setDisp(value);
      } else {
        setN1(n1 + value);
        setDisp(n1 + value);
      }
    } else {
      if (n2 === null){
        setN2(value);
        setDisp(value);
      } else {
        setN2(n2 + value);
        setDisp(n2 + value);
      }
    }
  }
  
  const negClickHandler = () => {
    if (disp !== "0") {
      const result = parseFloat(disp) * -1;
      setDisp(result.toString());
      if (op === null) {
        setN1(result.toString());
      } else {
        setN2(result.toString());
      }
    }
  };
  
  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }

  const decimalClickHandler = () => {
    if (op === null) {
      if (n1 === null) {
        setN1("0.");
        setDisp("0.");
      } else if (!n1.includes(".")) {
        setN1(n1 + ".");
        setDisp(disp + ".");
      }
    } else {
      if (n2 === null) {
        setN2("0.");
        setDisp("0.");
      } else if (!n2.includes(".")) {
        setN2(n2 + ".");
        setDisp(disp + ".");
      }
    }
  };


  return (
    <div className="App">
      <div className='MyName'/>
      <YourName display={'Neil Dominic Galan - CPE2A'}/>
      <div className="CalcContainer">
        <CalcDisplay display={disp}/>
        <div className="ButtonContainer">
          <CalcButton label={"CLR"} onClick={clrClickHandler} color={'#c75353'}/> 
          <CalcButton label={"EXP"} onClick={opClickHandler} color={'#EAC117'}/>
          <CalcButton label={"MOD"} onClick={opClickHandler} color={'#EAC117'}/>
          <CalcButton label={"DIV"} onClick={opClickHandler} color={'#535dc7'}/>
          <CalcButton label={7} onClick={numberClickHandler}/>
          <CalcButton label={8} onClick={numberClickHandler}/>
          <CalcButton label={9} onClick={numberClickHandler}/>
          <CalcButton label={"MUL"} onClick={opClickHandler} color={'#535dc7'}/>
          <CalcButton label={4} onClick={numberClickHandler}/>
          <CalcButton label={5} onClick={numberClickHandler}/>
          <CalcButton label={6} onClick={numberClickHandler}/>
          <CalcButton label={"ADD"} onClick={opClickHandler} color={'#535dc7'}/>
          <CalcButton label={1} onClick={numberClickHandler}/>
          <CalcButton label={2} onClick={numberClickHandler}/>
          <CalcButton label={3} onClick={numberClickHandler}/>
          <CalcButton label={"SUB"} onClick={opClickHandler} color={'#535dc7'}/>
          <CalcButton label={"NEG"} onClick={negClickHandler} color={'#EAC117'}/>
          <CalcButton label={0} onClick={numberClickHandler}/>
          <CalcButton label={"."} onClick={decimalClickHandler} color={'#EAC117'}/>
          <CalcButton label={"EQ"} onClick={equalClickHandler} color={'#59c753'}/>
        </div>
      </div>
    </div>
  );
}