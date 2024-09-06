import inputBox from './components/inputBox';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import InputBox from './components/inputBox';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convert = () => {
    setConvertedAmount(amount * 83.95);
  };

  return (
    <>
      <h1>Currency Convertor </h1>
      <InputBox
        label="Dollar"
        amount={amount}
        onAmountChange={(amount) =>
          setAmount(amount)
        }
      />
      <InputBox
        label="Rupee"
        amount={convertedAmount}
        onAmountChange={(amount) =>
          setAmount(amount)
        }
      />
      <button onClick={convert}> Convert </button>
    </>
  );
};

export default App;
