import './ArtCard.css';

const ArtCard = (props) => {

    return <div className="card">
        <img src={props.image} alt="" />
        <h2>{props.style}</h2>
        <p>Author/performer: {props.studentName}</p>        
        <p className='purpose'>Purpose: {props.purpose}</p>
    </div>
}

export default ArtCard;