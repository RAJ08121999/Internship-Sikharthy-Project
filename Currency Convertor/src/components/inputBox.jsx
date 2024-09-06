import React from 'react'

const InputBox =({label, amount, onAmountChange}) =>{
    return (
        <>  
            <label htmlFor="">{label}</label>
            <input 
            type="number"
            value={amount}
            placeholder='Amount'
            onChange={(e)=>{
                onAmountChange(e.target.value);
            }}
            />
        </>
    );
};

export default InputBox;
