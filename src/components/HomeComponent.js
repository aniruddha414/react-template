import React from 'react';

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Home;