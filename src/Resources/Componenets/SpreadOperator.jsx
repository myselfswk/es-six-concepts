import React from 'react';

function SpreadOperator() {
    //lets say we have two arrays
    const first = [1, 2, 3];
    const second = [4, 5, 6];

    //Combined with simple method
    const combined = first.concat(second);
    console.log(combined);

    //Combined with Spread Operator
    const combined2 = [...first, 3.5, ...second, 6.5];
    //you can directly add a new element in an array by spread operator

    console.log(combined2);

    //we can also spread objects
    const obj1 = { name: 'M Waleed Khan' };
    const obj2 = { course: 'EcmaScript6' };

    //combined in the simple manners
    const combinedObj = {
        obj1, obj2
    }

    console.log(combinedObj);

    //Combined with Spread Operator
    const comObj = {
        ...obj1, ...obj2,
        Country: "Pakistan",
        city: 'Karachi'
    }

    console.log(comObj);

    return (
        <div>
            <h1>Spread Operator</h1>
        </div>
    )
}

export default SpreadOperator;
