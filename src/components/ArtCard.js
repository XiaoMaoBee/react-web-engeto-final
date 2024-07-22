import './ArtCard.css';

const ArtCard = (props) => {

    return <div className="card">
        <img src={props.image} alt="" />
        <p>Student: {props.studentName}</p>
        <p>Styl: {props.style}</p>
        <p>Náročnost: {props.level} / 5</p>
        <p className="description">Popis:<br /> {props.description}</p>
        {/* <MoreInfoButton /> */}
    </div>
}

export default ArtCard;