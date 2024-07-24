import './ArtCard.css';

const ArtCard = (props) => {

    return <div className="card">
        <img src={props.image} alt="" />
        <h2>{props.style}</h2>
        <p>Author/performer: {props.studentName}</p>        
        <p>Purpose: {props.purpose}</p>
        <p className="description">Popis:<br /> {props.description}</p>
        {/* <MoreInfoButton /> */}
    </div>
}

export default ArtCard;