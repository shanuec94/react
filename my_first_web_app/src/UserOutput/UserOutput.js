import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>UserName: {props.userName}</p>
            <p>Hope, I'll be OverWritten!!</p>
            <h5>Developing a WebApplication!!</h5>
        </div>
    );
};

export default userOutput;