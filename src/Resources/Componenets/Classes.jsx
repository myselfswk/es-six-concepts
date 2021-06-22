import React, { Component } from 'react'

export default class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Waleed Khan',
            age: 22,
            c: "EcmaScript6"
        }
    }


    render() {
        const { name, age, c: course } = this.state;
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Classes</h1>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
                <h1>Course: {course}</h1>
            </div>
        )
    }
}
