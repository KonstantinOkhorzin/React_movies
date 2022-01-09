import {useState, useEffect} from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';

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
               <Preloader/>
           }
        </main>
    );
}

export default Main;