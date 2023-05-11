import { Container } from "components/App.styled";
import { SearchForm, SubmitButton, SearchFormInput, Label } from "components/Movies/SearchInput.styled";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';


export const SearchInput = ({handleSearchInputSubmit}) => {
    const [searchParams, setSearchParams] = useSearchParams({ movieId: ''});
    const movieId = searchParams.get('movieId') ?? '';
    const [searchText, setSearchText] = useState(movieId);
 
    const onSearchChange = e => {
        const movieIdValue = e.target.value
        if (movieIdValue === "") {
           return setSearchParams({})
        } else {
            setSearchParams({ movieId: movieIdValue });
        }
        setSearchText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        handleSearchInputSubmit(searchText);
    }

    useEffect(() => {
        handleSearchInputSubmit(searchText);
    }, [handleSearchInputSubmit, searchText])

    return (
        <Container>
            <SearchForm onSubmit={onSubmit}>
                <Label></Label>
                <SearchFormInput onChange={onSearchChange}
                                type="text"
                                autoFocus
                                value={movieId}
                                searchText={searchText}>
                </SearchFormInput>
                <SubmitButton type="submit">Search</SubmitButton>
            </SearchForm>
        </Container>  
    )
}

SearchInput.propTypes = {
    handleSearchInputSubmit: PropTypes.func.isRequired,
}