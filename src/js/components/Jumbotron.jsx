import React from "react";

const Jumbotron = () => {
    return (
        <>
            <div className="position-relative p-5 text-center text-muted bg-light border border-dashed rounded-5 w-75">
                <img src="src/img/React-icon.svg.png" alt="react logo" width="200" />
                <h1 className="text-body-emphasis mt-3">React.js</h1> 
                <p className="col-lg-6 mx-auto mb-4 fs-4">
                React.js is a JavaScript library created by Meta (Facebook) that allows you to create user interfaces in a shorter and easier way.
                </p> 
                <button className="btn btn-primary px-5 mb-5" type="button">
                    Learn more about React.js
                </button> 
            </div>
        </>
    );
}

export default Jumbotron;