import { getMovieCredits } from "services/getApi";
import { CastDetails } from 'components/Cast/CastDetails';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        getMovieCredits(movieId).then(response => {
            const castInfo = response.map(cast => {
                return {
                    profile_path: cast.profile_path,
                    name: cast.name ?? '',
                    character: cast.character ?? '',
                    id: cast.id,
                };
            })
            setCast(castInfo);
        });
    }, [movieId]);
    if (cast?.length !== 0)
        return (
      <ul>
        {cast && cast.map(cast => <CastDetails key={cast.id} cast={cast} />)}
      </ul>
    );
  if (cast?.length === 0)
    return <p>We don't have any cast for this movie</p>;
};

export default Cast;
