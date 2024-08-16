import './presentation.css';
import Card from './ArtCard';
import data from '../data'

const Presentation = () => {

return <section className='presentation-container'>
    <h1>About Her Arts ...</h1>

    <div className="cards-container">
        
        {data.map( (oneCard) => {
            const {id, art, image, artist_name, purpose} = oneCard;
            return <div key={id} className="card">
                <img src={image} alt=""/>
                <h2>{art}</h2>            
                <p>Author/performer: {artist_name}</p>
                <p className='purpose'>Purpose: {purpose}</p>
                </div>
        })
    }        
       
    </div> 

</section>
}

export default Presentation;