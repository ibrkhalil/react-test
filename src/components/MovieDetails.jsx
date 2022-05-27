import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=6c77b4cd4bc93f56400e7199f6339343&language=en-US');
  console.log(id)
  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { movie && (
        <div>
          <h2>{ movie.title }</h2>
          <div style={{width: "90%", textAlign: "center" , height: "500px", backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          </div>
          <article className="movie-details">
              {movie.overview}
          </article>
        </div>
      )}
    </div>
  );
}
 
export default MovieDetails;