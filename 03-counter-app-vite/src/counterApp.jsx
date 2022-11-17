import { useState } from 'react';
import PropTypes from  'prop-types';

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(10);

   const handleAdd = ()=> setCounter(counter + 1);
   
   const handleSubsatract = () => setCounter(counter-1);

   const resetButton = () => setCounter (value)
   return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd}>
            +1
        </button>
        <button onClick={handleSubsatract}> -1 </button>
        <button onClick={resetButton}>Reset</button>
        </>
    );
}

CounterApp.prototype = {
    value : PropTypes.number.isRequired
}