import React from 'react'

function ThisKeyword() {
    const person = {
        name: "Waleed",
        walk(){
            console.log(this);
        }
    };

    person.walk(); //this will return the refernece of object

    // const walk = person.walk;
    // walk();
    //this will returns undefine

    const walk = person.walk.bind(person);
    walk();

    return (
        <div>
            <h1>This Keyword</h1>
        </div>
    )
}

export default ThisKeyword;
