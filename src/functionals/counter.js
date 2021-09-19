import React, { useState } from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);

    function counter(sign, num) {
        let counted;
        if(sign === 'add'){
            counted = num + 1;
        } else if(sign === 'sub'){
            counted = num - 1;
        }
        setCount(counted);
    }

    return (
        <main>
            <h1>{count}</h1>
            <button onClick={() => counter('add', count)}>Add</button>
            <button onClick={() => counter('sub', count)}>Subtract</button>
        </main>
    )
}