import React, { useState } from 'react';
import useFetch from "../components/useFetch";
import MovieList from "../components/MovieList"

export const Home = () => {
  const { error, isPending, data: movies } = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=6c77b4cd4bc93f56400e7199f6339343&language=en-US&page=1')
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <h1>Space X Ships</h1>
      <input className='search-bar' type="text" placeholder='Enter a movie name to search for it!' onChange={e => setSearchText(e.target.value)} />
      <div className="App" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px" }}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {movies && <MovieList movies={movies.results.filter(movie => {
          if (searchText == "") { return true; }
          return (movie.title.toLowerCase().includes(searchText.toLowerCase()))
        })} />}
      </div>
    </>
  );
};

export default Home;