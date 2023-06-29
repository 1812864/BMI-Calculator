import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import Button from './component/button/handleButton';
import FormInput from './component/formInput/handleFormInput';
import TitleHeader from './component/header/titleHeader';
import './App.css';
import { flushSync } from 'react-dom';

function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [result, setResult] = useState(null)
  const [status, setStatus] = useState("")
  const [openModal, setOpenModal] = useState(false)
  let bmiRef = useRef(null)

  bmiRef.current = useMemo(() => {
    return Number(weight / (height / 100) ** 2).toFixed(2)
  }, [height, weight])

  useEffect(() => {
    if (weight > 0 && height > 0) {
      setResult(bmiRef.current)
    }

    let bmiStatus = getStatus(bmiRef.current)
    setStatus(bmiStatus)
  }, [height, weight])

  const calculateBMI = () => {
    setOpenModal(true)
  }

  const handleReset = useCallback(() => {
    setResult(null)
    setHeight("")
    setWeight("")
    setOpenModal(false)
  }, [])

  const getStatus = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal"
    else if (bmi >= 25 && bmi < 29.9) return "Overweight"
    else if (bmi >= 29.9) return "Obese"
  }
  return (
    <div className="App">
      <div className="main-app">
        <div className="container">
          <TitleHeader />
          <div className="content">
            <p>M/KG</p>
            <form className='form-input'>
              <FormInput onChange={(e) => setHeight(e.target.value)} placeholder='Height' value={height} title='Your Height(cm)' />
              <br />
              <FormInput onChange={(e) => setWeight(e.target.value)} placeholder='Weight' value={weight} title='Your Weight(kg)' />
            </form>
            <div className='button'>
              <Button onClick={calculateBMI} className='Calculator' label='Calculator' />
              <Button onClick={handleReset} className='reset' label='Reset' />
            </div>
            {openModal && <div className="result">Your body: {result} | {status}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
