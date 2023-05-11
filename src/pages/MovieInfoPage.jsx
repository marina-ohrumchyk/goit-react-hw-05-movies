import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { getMovieDetails } from "services/getApi";
import { MovieCard } from 'components/Movies/MovieCard';

const MovieInfoPage = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');


    useEffect(() => {
        getMovieDetails(movieId).then(response => {
            const {
                genres,
                id,
                overview,
                poster_path,
                release_date,
                title,
                vote_average,
            } = response;
            
            setMovieDetails({
                genres,
                id,
                overview,
                poster_path,
                release_date,
                title,
                vote_average,
            });
        });
    }, [movieId])
    

    return (
        <section>
            <div>
                <Link to={backLinkHref.current} state={{ from: location }}>
                    Go back
                </Link>
                {movieDetails && movieDetails.id && (
                    <MovieCard movieDetails={movieDetails}></MovieCard>
                )}
                <div>
                    <h3>Additional Information</h3>
                    <ul>
                        <li>
                            <Link to="cast">Cast</Link>
                        </li>
                        <li>
                            <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                </div>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </div>   
        </section>
    )

}

export default MovieInfoPage;