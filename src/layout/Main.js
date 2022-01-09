import {useState, useEffect} from 'react';

import Movies from '../components/Movies';

function Main() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=78584b3c&s=matrix')
        .then(response => response.json())
        .then(data => setMovies(data.Search))
    }, [movies])

    return (
        <main className='content container'>
           {
               movies.length ? 
               (<Movies movies={movies}/>) :
               <h3>Loading...</h3>
           }
        </main>
    );
}

export default Main;