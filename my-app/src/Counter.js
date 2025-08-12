import {useState } from "react";

function Counter()
{
    const [counter,setCounter]=useState(0);


    function handleIncrement(){
     setCounter(prevCounter=>prevCounter+1);
    }
    function handledecrement(){
     setCounter(prevCounter=>prevCounter-1);
    }
    function handleReset(){
     setCounter(0);
    }

function handleClick()
{
    alert('button clicked');
    setCounter(10);

} 
function handleOpen(){
    alert('open');
}

return(
    <>
    counter is  {counter}

    <button onClick={handleClick}>Click</button>

     <button onClick={handleIncrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
        <button onClick={handleOpen}>open new </button>

    </>
)
}
export default Counter;