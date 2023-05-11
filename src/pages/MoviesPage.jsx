import { useEffect, useState } from "react";
import { searchMovies } from "services/getApi";
import { MoviesList } from "../components/Movies/MoviesList";
import { SearchInput } from "components/Movies/SearchInput";

const MoviesPage = () => {
    const [searchText, setSearchText] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearchInputSubmit = query => {
        if (query !== searchText) {
            setSearchText(query);
        }
    }

    useEffect(() => {
        if (searchText !== '') {
            searchMovies(searchText).then(response => {
                setMovies(response);
            });
        }
    }, [searchText])

    return (
        <div>
            <SearchInput handleSearchInputSubmit={handleSearchInputSubmit} />
            <MoviesList movies={movies} />
        </div>
    )
}

export default MoviesPage;
