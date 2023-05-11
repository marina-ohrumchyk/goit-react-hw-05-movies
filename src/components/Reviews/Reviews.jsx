import { getMovieReviews } from "services/getApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!reviews) {
            getMovieReviews(movieId).then(response => {
                setReviews(response);
            });
        }
    }, [movieId, reviews])
    
    if (reviews?.length !== 0)
        return (
            <ul>
                {reviews && reviews.map(review => (
                    <li key={review.id}>
                        <h2>Author:{review.author}</h2>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        );
  if (reviews?.length === 0)
    return <p>We don't have any reviews for this movie.</p>;
};

export default Reviews;
