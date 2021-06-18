import React from 'react';

function ArrowFunc() {

    //square function with normal approach
    const squareNormal = function (number) {
        return number * number;
    }

    //square function with arrow approach
    const squareArrow = (number) => {
        return number * number;
    }

    //Arrow Function in One Line
    const squareArrowOneLine = number => number * number;

    console.log("Normal Function: ", squareNormal(4));
    console.log("Arrow Function: ", squareArrow(5));
    console.log("Arrow Function On One Line: ", squareArrowOneLine(6));

    //arrow function with array
    const jobs = [
        { id: 1, isActive: true },
        { id: 2, isActive: true },
        { id: 3, isActive: true },
        { id: 4, isActive: false },
    ]

    //filter jobs by normal function
    const activeJobs = jobs.filter(function (job) {
        return job.isActive;
    });

    //filter jobs by arrow function
    const activeJobsByArrow = jobs.filter((job) => {
        return job.isActive;
    });

    //filter jobs by arrow function One Line
    const activeJobsByArrowOneLine = jobs.filter(job => job.isActive);

    //Apply code
    console.log("Jobs by Normal Function: ", activeJobs);
    console.log("Jobs by Arrow Function: ", activeJobsByArrow);
    console.log("Jobs by Arrow Function On One Line: ", activeJobsByArrowOneLine);

    return (
        <div>
            <h1>Arrow Function: -</h1>
        </div>
    )
}

export default ArrowFunc;
