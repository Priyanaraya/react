// import React,{useState} from 'react'

// const Increment = () => {
//     const [value,setvalue] =useState(50)
//   return (
//     <div>
//       <p>count:{value}</p>
//       <button className='btn btn-info' onClick={()=>setvalue(value+10)}>Increment</button>
//       <button className='btn btn-danger' onClick={()=>setvalue(value-10)}>Decrement</button>
//       <button className='btn btn-success' onClick={()=>setvalue(value*2)}>Multiple</button>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup interval
        }
    }, [time]);

    return (
        <div>
            <p>Time Remaining: {time} seconds</p>
            <button className='btn btn-success' onClick={() => setTime(10)}>Reset Timer</button>
        </div>
    );
}

export default CountdownTimer;


// export default Increment
