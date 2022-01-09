import {useState} from 'react';

function Search({searchMovies}) {

    const [search, setSearch] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search);
        }
    }

    return (
        <div className="row">
          <div className="input-field ">
            <input 
                onKeyDown={handleKey}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='search' 
                type="search" 
                className="validate"/>
                <button
                className='btn search-btn' 
                onClick={() => searchMovies(search)}>
                    Search
                </button>
          </div>
      </div>
    );
}

export default Search;