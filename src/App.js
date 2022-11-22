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
    // let LengthTracker = numbers.target.value.length+1
    // if (numbersArray.length!==LengthTracker-1) {
    //   numbersArray[numbersArray.length-1].push("x")
    // }

    setCardNumber(<div>
      <span style={{ marginRight: "10px" }}>{[numbersArray[0], numbersArray[1], numbersArray[2], numbersArray[3]]}</span>

      <span style={{ marginRight: "10px" }}>{[numbersArray[4], numbersArray[5], numbersArray[6], numbersArray[7]]}</span>

      <span style={{ marginRight: "10px" }}>{[numbersArray[8], numbersArray[9], numbersArray[10], numbersArray[11]]}</span>

      <span>{[numbersArray[12], numbersArray[13], numbersArray[14], numbersArray[15]]}</span>
    </div>
    )

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
