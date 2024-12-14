import * as React from'react';
import JokeButton from './JokeButton';

const Jokes = () => {
    const [joke, setJoke] = React.useState('')

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?")
            .then((res)=> res.json())
            .then((data)=>setJoke(data.joke))
    }

    return (
        <div>
            <h1>Joke Generator By me</h1>
            <JokeButton callApi={fetchApi}/>
            <h2>{joke}</h2>
        </div>
    )
}

export default Jokes;