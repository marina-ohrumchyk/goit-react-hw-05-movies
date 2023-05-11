export const CastDetails = ({ cast }) => {
    return (
        <div>
            <div>
                <img src={cast.profile_path} alt="" />
            </div>
        <div>
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
        </div>
        </div>
  );
}