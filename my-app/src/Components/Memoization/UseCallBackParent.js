import React from "react";
import UseCallBackChild from './UseCallBackChild.js';

import {set} from 'react-hook-form';

function UseCallBackParent(){
    const [count,setCount]=React.useState(0);
    const[theme,setTime]=React.useState('light');

    const handleClick=React.useCallback(()=>{
        setCount(count+1);
        console.log('Button clicked-child');
    },[count]);

    const handleOnClick=()=>{
        setCount(count+1);
    }
    return(
        <>

        <p>Count: {count}</p>
        <button onClick={handleClick}>BUTTON</button>
        </>
    )
}

export default UseCallBackParent;