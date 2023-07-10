import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noPicture from "../Image/pylz-works-ViI6qkoRfNA-unsplash.jpg";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3f8ff0c1398b5b3adc5a787b0794fa72&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovideDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />;
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                {posterPath !== "https://image.tmdb.org/t/p/w500null" ? (
                  <img
                    src={posterPath}
                    className="card-img-top"
                    alt={movieDetails.original_title}
                  />
                ) : (
                  <img
                    src={noPicture}
                    className="card-img-top "
                    alt={movieDetails.original_title}
                  />
                )}
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
            <div className="row">
              <div clasName="col-lg-6 mt-5">
                <h3 className="fs-5 mt-5 center">
                  <nav aria-label="Page navigation example top - 50">
                    <ul class="pagination">
                      <li class="page-item">
                        <Link
                          class="page-link page-link text-decoration-none text-muted"
                          to="/"
                          aria-label="Previous"
                        >
                          {" "}
                          Home Page
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link
                          to={movieDetails.homepage}
                          target="blank"
                          className="page-link text-decoration-none text-muted"
                        >
                          Movie Link
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link
                          class="page-link page-link text-decoration-none text-muted"
                          to="/search"
                          aria-label="Next"
                        >
                          Back
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </h3>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovideDetails();
};

export default MovieView;
