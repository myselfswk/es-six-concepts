import React from 'react';

function ArrowFuncWithThis() {

    //by normal function
    const person = {
        talk(){
            var self = this;
            setTimeout(function() {
                console.log("self by normal function: ", self);
            }, 1000);
        }
    };

    //by arrow function
    const personTwo = {
        talk(){
            // var self = this;
            setTimeout(() => {
                console.log("self by Arrow function: ", this);
            }, 1000);
        }
    };

    person.talk();
    personTwo.talk();

    return (
        <div>
            <h1>Arrow Function With This</h1>
        </div>
    )
}

export default ArrowFuncWithThis;
