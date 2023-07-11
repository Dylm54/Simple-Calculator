import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [display, setDisplay] = useState("")
  const [total, setTotal] = useState(0)
  const [equal, setEqual] = useState(0)

  const calculate = () => {
    setTotal(eval(display))
    setEqual(1)
    setDisplay(display + "=")
  }

  const symbols = [".", "0"]
  const operators = ["+", "*", "/", ".", "0", "-"]

  const symbolMap = (symbol) => {
    let index = 0
    symbols.map((el, i) => { el === symbol ? index = i : "" })
    return symbols[index]
  }

  const operatorMap = (operator) => {
    let index = 0
    operators.map((el, i) => { el === operator ? index = i : "" })
    return operators[index]
  }

  const handleClick = (value) => {
    if (equal === 0) {
      if (value.target.value === "AC") {
        setDisplay("")
        setTotal(0)
      } else if (value.target.value === symbolMap(value.target.value)) {
        if (display[display.length - 1] === symbolMap(value.target.value)) {
          setDisplay(display + "")
        } else {
          setDisplay(display + value.target.value)
          setTotal(value.target.value)
        }
      } else if (value.target.value === operatorMap(value.target.value)) {
        if (display[display.length - 1] === operatorMap(display[display.length - 1])) {
          if (value.target.value != "-") {
            setDisplay(display + "")
          } else {
            setDisplay(display + value.target.value)
            setTotal(value.target.value)
          }
        }else {
          setDisplay(display + value.target.value)
          setTotal(value.target.value)
        }
      } else {
        setDisplay(display + value.target.value)
        setTotal(value.target.value)
      }
    } else {
      if (value.target.value === operatorMap(value.target.value)) {
        setDisplay(total + value.target.value)
      } else {
        if (value.target.value === "AC") {
          setDisplay("")
          setTotal(0)
        }else {
          setDisplay(value.target.value)
          setTotal(value.target.value)
        }  
      } 
      setEqual(0)
    }
  }

  return (
    <div className="container justify-content-center">
      <div className="row w-100 justify-content-center">
      <div className="wrapper col-md-5 col-sm-6 col-9 col-lg-4 col-xl-3 justify-content-around">
        <div id="display" className="current display">{display}</div>
        <div className="display">{total}</div>
        <div className="grid">
          <button onClick={handleClick} className="top" id="clear" value="AC">AC</button>
          <button onClick={handleClick} className="rectangle top" value="/" id="divide">/</button>
          <button onClick={handleClick} className="rectangle right" value="*" id="multiply">x</button>
          <button onClick={handleClick} className="rectangle" value="7" id="seven">7</button>
          <button onClick={handleClick} className="rectangle" value="8" id="eight">8</button>
          <button onClick={handleClick} className="rectangle" value="9" id="nine">9</button>
          <button onClick={handleClick} className="rectangle right" value="-" id="subtract">-</button>
          <button onClick={handleClick} className="rectangle" value="4" id="four">4</button>
          <button onClick={handleClick} className="rectangle" value="5" id="five">5</button>
          <button onClick={handleClick} className="rectangle" value="6" id="six">6</button>
          <button onClick={handleClick} className="rectangle right" value="+" id="add">+</button>
          <button onClick={handleClick} className="rectangle" value="1" id="one">1</button>
          <button onClick={handleClick} className="rectangle" value="2" id="two">2</button>
          <button onClick={handleClick} className="rectangle" value="3" id="three">3</button>
          <button onClick={calculate} className="right" value="=" id="equals">=</button>
          <button onClick={handleClick} className="rectangle" value="0" id="zero">0</button>
          <button onClick={handleClick} className="rectangle" value="." id="decimal">.</button>
        </div>
      </div>
      </div>
      <div className="footer mt-3 text-center">
        <p>Designed and Coded By<br />Rifki</p>
      </div>  
    </div>
  )
}

export default App
