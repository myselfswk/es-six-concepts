import React from 'react';

function MapFunc() {
    const color = ['red', 'green', 'blue'];

    //with normal callback function
    const itemsByFunc = color.map(function (color) {
        return '<li>' + color + '</li>';
    })

    //with arrow function
    const itemsByArrowFunc = color.map(color => '<li>' + color + '</li>')

    //arrow function with template literals
    const itemsByTempLiterals = color.map(color => `<li>${color}</li>`)

    return (
        <div>
            <h1>Map Function</h1>
            <ul>
                {itemsByFunc}
            </ul>
            <ul>
                {itemsByArrowFunc}
            </ul>
            <ul>
                {itemsByTempLiterals}
            </ul>
        </div>
    )
}

export default MapFunc;
