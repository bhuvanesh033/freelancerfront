import { useEffect, useState } from 'react';
const Counter=()=>{
    const[count,setcount]=useState(0);
    const[count2,setcount2]=useState(0);
    //let count=0;
    useEffect(()=>{
        console.log("effect",count);
    },[count])
    const increment=()=>{
        setcount(count+1)
        if(count==5){
            console.log("reached the limit")
            
        }
        
        //setcount((pre=>pre+1))
        console.log(count);
        
    }
    const increment2=()=>{
        setcount2((pre=>pre+1))
        setcount2((pre=>pre+1))
        console.log(count2);
    }
    const decrement=()=>{
        setcount(count-1)
    }
    const clear=()=>{
        setcount(0);

    }
    return(
        <>
        <div>Counter 1</div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {count !==0 && <button onClick={clear}>clear</button>}
        <hr/>
        <h1>{count2}</h1>
        <div>Counter 2</div>
        <button onClick={increment2}>+</button>
    
        </>
    )
}
export default Counter;