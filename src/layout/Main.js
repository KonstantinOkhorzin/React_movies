import {useState, useEffect} from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

function Main() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=78584b3c&s=matrix')
        .then(response => response.json())
        .then(data => setMovies(data.Search))
    }, []);

    const searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}`)
        .then(response => response.json())
        .then(data => setMovies(data.Search))
    }

    return (
        <main className='content container'>
            <Search searchMovies={searchMovies}/>
           {
               movies.length ? 
               (<Movies movies={movies}/>) :
               <Preloader/>
           }
        </main>
    );
}

export default Main;