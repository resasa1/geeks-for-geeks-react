/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

const JokeButton = (props:any) => {
    return (
        <button onClick={props.callApi}>Get Joke</button>
        
    )
}

export default JokeButton;