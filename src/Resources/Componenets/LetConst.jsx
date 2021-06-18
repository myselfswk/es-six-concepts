import React from 'react';

function LetConst() {
    function SayHello() {
        for (var i = 0; i < 5; i++) {
            console.log("i by Var: ", i);  //i from 0-4
        }
        //by var, we can use i in the whole funtion
        console.log(i); //i from 0-5
    }

    function SayHelloTwo() {
        for (let i = 0; i < 5; i++) {
            console.log("i by Let", i);  //i from 0-4
        }
        //by let, we use i only that specific block
        //console.log(i);
    }

    const x = 2;
    //we can't change the value of x as x = 3

    SayHello();
    SayHelloTwo();
    console.log("const x: ", x);
    
    return (
        <div>
            <h1>Let and Const</h1>
        </div>
    )
}

export default LetConst;
