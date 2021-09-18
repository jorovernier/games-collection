import React, { useEffect, useState } from 'react';

export default function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    useEffect(() => {
        let number3 = num1 + num2;
        setNum3(number3);
        console.log(num3)
    }, [num1])

    function randomNums(){
        setNum1(Math.floor(Math.random() * 100));
        setNum2(Math.floor(Math.random() * 100));
    }

    return (
        <main>
            <div>
                <p id='sum'>They equal {num3}.</p>
                <button onClick={() => randomNums()}>Add</button>
            </div>
        </main>
    )
}