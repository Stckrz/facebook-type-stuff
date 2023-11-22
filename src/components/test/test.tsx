import React from 'react';
import { useState } from 'react';


export function TestComponent(){


	
	const [counter, setCounter] = useState<number>(0);

	function clickHandler(){
		setCounter(counter + 1)

	}

	return(
		<>
		<button onClick={()=>{clickHandler()}}>click me</button>
		<div>{counter}</div>
		</>
	)

}
