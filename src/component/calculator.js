import React from "react";
import './calculator.css'
import { useState } from 'react'

function Calculator() {
    const [data, setData] = useState("")
    const handleClick = (e) => {
        setData(data.concat(e.target.name))
    }

    const handleChange = (e) => {
        setData(e.target.value);
    }

    const clear = () => {
        setData("");
    }

    const backSpace = () => {
        setData(data.slice(0, -1));
    }

    const calculate = () => {
        try {
            setData(eval(data).toString());
        } catch (err) {
            setData("error!")
        }
    }

    return (
        <div className="page">
            <h1>Calculator</h1>

            <div className="calculator">
                <from className="screen">
                    <input className="data-screen" type="text" value={data} onChange={handleChange}/>
                </from>
                <div className="operator">
                    <button name="+" onClick={handleClick}>+</button>
                    <button name="-" onClick={handleClick}>-</button>
                    <button name="*" onClick={handleClick}>x</button>
                    <button name="/" onClick={handleClick}>/</button>
                    <button id="backspace" onClick={backSpace}>C</button>
                    <button id="clear" onClick={clear}>Clear</button>
                </div>
                <div className="btn">
                    <div className="row1">
                        <button name="1" onClick={handleClick}>1</button>
                        <button name="2" onClick={handleClick}>2</button>
                        <button name="3" onClick={handleClick}>3</button>
                    </div>
                    <div className="row2">
                        <button name="4" onClick={handleClick}>4</button>
                        <button name="5" onClick={handleClick}>5</button>
                        <button name="6" onClick={handleClick}>6</button>
                    </div>
                    <div className="row3">
                        <button name="7" onClick={handleClick}>7</button>
                        <button name="8" onClick={handleClick}>8</button>
                        <button name="9" onClick={handleClick}>9</button>
                    </div>
                    <div className="row4">
                        <button name="0" onClick={handleClick}>0</button>
                        <button name="." onClick={handleClick}>.</button>
                        <button id="data" onClick={calculate}>=</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calculator