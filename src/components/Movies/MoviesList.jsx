import { useLocation } from 'react-router-dom';
import { List, Item, StyledLink } from 'components/Movies/MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <div>
            <List>
                { movies && 
                    movies.map(movie => (
                        <Item key={movie.id}> 
                            <StyledLink
                                to={`${location.pathname === '/' ? 'movies/' : ''}${movie.id}`}
                                state={{ from: location }}
                            >
                            {movie.name}
                            </StyledLink>
                        </Item>
                    ))}
                
            </List>
        </div>
    )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};