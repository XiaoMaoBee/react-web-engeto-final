import './artCard.css';

const ArtCard = ({image, art, artist_name, purpose}) => {

    return <div className="card">
        <img src={image} alt="" />
        <h2>{art}</h2>
        <p>Author/performer: {artist_name}</p>        
        <p className='purpose'>Purpose: {purpose}</p>
    </div>
}

export default ArtCard;