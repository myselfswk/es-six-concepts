import React from 'react';

function ObjectDestructuring() {
    const address = {
        street: 'Street no 04',
        city: 'Karachi',
        country: 'Pakistan'
    }

    //Normally we extract values like
    const street = address.street;
    const city = address.city;
    const country = address.country;

    console.log("Address by Direct Extracting: ", street, city, country);

    //by Object Destructuring
    const { street: street1, city: city1, country: country1 } = address;
    console.log("Address by Object Destructuring: ", street1, city1, country1);

    return (
        <div>
            <h1>Object Destructuring</h1>
        </div>
    )
}

export default ObjectDestructuring;
