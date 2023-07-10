import Hero from "./Hero";
import { Link } from "react-router-dom";
import noPicture from "../Image/pylz-works-ViI6qkoRfNA-unsplash.jpg";
//TMDB API Key : 3f8ff0c1398b5b3adc5a787b0794fa72

const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <>
      <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
          {posterURL !== "https://image.tmdb.org/t/p/w500null" ? (
            <img
              src={posterURL}
              className="card-img-top"
              alt={detailUrl.original_title}
            />
          ) : (
            <img
              src={noPicture}
              className="card-img-top "
              alt={detailUrl.original_title}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">
              Show details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHTML = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      {resultsHTML && (
        <div className="container">
          <div className="row">{resultsHTML}</div>
        </div>
      )}
      {resultsHTML.length === 0 && (
        <div className="container justify-content-center">
          <div className="row">
            <h1 className="text-center mt-5 justify-center">
              Nothing found, try searching again.
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchView;
