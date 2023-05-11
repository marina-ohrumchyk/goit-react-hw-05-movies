import { useEffect } from "react";
import { getTrending } from "services/getApi";
import { useState } from "react";
import { MoviesList } from "components/Movies/MoviesList";

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrending().then(results => setMovies(results))
    }, [])
    return (
        <div>
            <h1>Trending Today</h1>
            <MoviesList movies={movies} />
        </div>
    )
}

export default Home;