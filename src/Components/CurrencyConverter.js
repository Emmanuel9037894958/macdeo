'use client'
import { useState } from 'react';  

const CurrencyConverter = () => {  
  const [nairaAmount, setNairaAmount] = useState(0);  
  const [dollars, setDollars] = useState<number | null>(null);  
  const exchangeRate = 460;

  const convertCurrency = () => {  
    const convertedAmount = nairaAmount / exchangeRate;  
    setDollars(convertedAmount);  
  };  

  return (  
    <div>  
      <h1>Naira to Dollar Converter</h1>  
      <input  
        type="number"  
        value={nairaAmount}  
        onChange={(e) => setNairaAmount(Number (e.target.value))}  
        placeholder="Enter amount in Naira"  
      />  
      <button onClick={convertCurrency}>Convert</button>  
      {dollars !== null && (  
        <h2>  
          {nairaAmount} Naira is approximately {dollars.toFixed(2)} Dollars  
        </h2>  
      )}  
    </div>  
  );  
};  

export default CurrencyConverter;  