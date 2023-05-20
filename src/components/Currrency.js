import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {currency} = useState('');
    const {dispatch } = useContext(AppContext);
    const setCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
}
    return (
        <select className="alert alert-primary" id="inputGroupSelect03" onChange={(event) => setCurrency(event.target.value)}
        value={currency} style={{ backgroundColor: 'lightgreen', color:'white' }}>
            <option defaultValue>Currency</option>
            <option value="$" name="Dollar" style={{color:'black'}}>$ Dollar</option>
            <option value="£" name="Pound" style={{color:'black'}}>£ Pound</option>
            <option value="€" name="Euro" style={{color:'black'}}>€ Euro</option>
            <option value="₹" name="it" style={{color:'black'}}>₹ Ruppee</option>
        </select>
    );
};
export default Currency;
