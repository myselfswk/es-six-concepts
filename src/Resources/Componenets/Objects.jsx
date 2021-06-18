import React from 'react';

function Objects() {
    const person = {
        name: "M Waleed Khan",
        walk() {
            console.log("Running");
        },
        talk() {
            console.log("Speaking");
        }
    }

    //access the attributes/properties of object
    person.talk();
    console.log("Name: ", person.name);

    //by braces, if user input from input field
    const targetMember = 'name'; //by this approach, we can take input
    person[targetMember] = 'Muhammad Waleed Khan';

    console.log("Modified Name: ", person[targetMember]);

    return (
        <div>
            <h1>Objects</h1>
        </div>
    )
}

export default Objects;
