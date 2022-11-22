import './App.css';
import { useState } from "react";


function App() {
  // use state for Card Holder name
  const [inputValue, setInputValue] = useState("JANE APPLESEED");
  const handleInptChng = (event) => {
    setInputValue(event.target.value);
  }
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000')

  // Use state for Expiry date
  const [expiryDate, setExpiryDate] = useState("00/00");
  const containExpiryDate = (month) => {
    setExpiryDate(month.target.value);
  }

  // useSate for Card number
  let storeValues = (numbers) => {
    let numbersArray=numbers.target.value.split('')
    // let numbersArray= [];
    // numbersArray.push([numbers.target.value])
    // numberContainer.push(numbersArray);
    let LengthTracker = numbers.target.value.length+1
    if (numbersArray.length!==LengthTracker-1) {
      numbersArray[numbersArray.length-1].push("x")
    }
    
    console.log(numbersArray)
    console.log(LengthTracker)
    console.log(numbers.target.value.length)
    // setCardNumber(<div>
    //   <span style={{ marginRight: "10px" }}>{numberContainer.substring(0, 4)}</span>

    //   <span style={{ marginRight: "10px" }}>{numberContainer.substring(4, 8)}</span>

    //   <span style={{ marginRight: "10px" }}>{numberContainer.substring(8, 12)}</span>

    //   <span>{numberContainer.substring(12, 16)}</span>
    // </div>
    // )

    // const handleValidate = ()=>{

    // }

  }

  // useState for CVV number
  const [cvvNumber, setCvvNumber] = useState("000");
  const handleCvvNumber = (cvv) => {
    setCvvNumber(cvv.target.value);
  }



  return (
    <div className="App">
      <div className='first-half'></div>
      <div className='second-half'>
        <form>
          <div className='align'>
            <label>
              CARDHOLDER NAME
            </label>
            <input type={"text"} maxlength="30" placeholder="e.g. JANE APPLESEED" onChange={handleInptChng} />
          </div>
          <div className='align'>
            <label>
              CARD NUMBER
            </label>
            <input id='inn' placeholder='e.g. 1234 5678 9012 3456' type={'text'} inputMode={'tel'} autocomplete={"cc-number"} maxLength={16} onChange={storeValues}/>
          </div>
          <div className='hori-align'>
            <div className='align'>
              <label>
                EXP. DATE (MM/YY)
              </label>
              <input className='smal' type={'month'} onChange={containExpiryDate}/>
            </div>
            <div className='align'>
              <label>
                CVC
              </label>
              <input className='smal' id='cvc' maxLength={3} type={'tel'} placeholder='e.g. 123'
              onChange={handleCvvNumber}/>
            </div>
          </div>
          <button className='btn' >Confirm</button>
        </form>
      </div >
      <div className='card-front'>
        <div className='circle-container'>
          <div className='circle-one'></div>
          <div className='circle-two'></div>
        </div>
        <p className='card-num'>{cardNumber}</p>
        <div className='name-expd'>
          <p className='crd-name'>{inputValue}</p>
          <p className='expd'>{expiryDate}</p>
        </div>
      </div>
      <div className='card-back'>
        <p className='cvv-number'>{cvvNumber}</p>
      </div>
    </div >
  );
}

export default App;
