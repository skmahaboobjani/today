import React, { useMemo, useState, useSyncExternalStore } from 'react'

function Counter ()
{

    const [counterOne, setCounterOne] =useState(0)
    const [counterTwo, setCounterTwo] =useState(0)
  
const incrementOne =()=>
{
    setCounterOne(counterOne + 1)
}
 const incrementTwo =()=>
 {
    setCounterTwo(counterTwo + 1)
 }
    const even = useMemo (()=>
    {
        let i=0
        while(i < 10000000) i++
        return counterOne % 2 == 0
    }, [counterOne])
    
    return (
        <div>
 <div>
    <button onClick={incrementOne }>Counte One-{counterOne}</button>
    <span>{even ? 'even':'odd'}</span>
 </div>

 <div>
 <button onClick={incrementTwo }>Counte Two-{counterTwo}</button>
 </div>
 </div>
    )
}

export default Counter;