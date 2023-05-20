import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const [budget, setBudget] = useState('');
    const {currency} = useContext(AppContext);
    
    if (budget > 20000) {
        alert("The maximum budget is 20000");
        setBudget("");
        return;
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                step = '10'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setBudget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;
