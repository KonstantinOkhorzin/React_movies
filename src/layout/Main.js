import {useState, useEffect} from 'react';

import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

function Main() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=78584b3c&s=matrix')
        .then(response => response.json())
        .then(data => setMovies(data.Search))
        .catch((err) => {
            console.error(err);
        })
        setLoading(false)
    }, []);

    const searchMovies = (str, type) => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => setMovies(data.Search))
        .catch((err) => {
            console.error(err);
        })
        setLoading(false)
    }

    return (
        <main className='content container'>
            <Search searchMovies={searchMovies}/>
           {
               loading ? 
               <Preloader/> :
               <Movies movies={movies}/>
           }
        </main>
    );
}

export default Main;