import './Presentation.css';
import Card from './ArtCard';
import data from '../data'

const Presentation = () => {
    return <section className='presentation-container'>
        <h1>About Her Arts ...</h1>

    <div className="cards-container">
        
        <Card style={data[0].art} 
           image={data[0].image}
           studentName={data[0].artist_name}
           purpose={data[0].purpose}         
           />

        <Card style={data[1].art} 
            image={data[1].image}
            studentName={data[1].artist_name}
            purpose={data[1].purpose} 
            />

        <Card style={data[2].art} 
            image={data[2].image}
            studentName={data[2].artist_name}
            purpose={data[2].purpose} 
            />

        <Card style={data[3].art} 
            image={data[3].image}
            studentName={data[3].artist_name}
            purpose={data[3].purpose} 
            />

        <Card style={data[4].art} 
            image={data[4].image}
            studentName={data[4].artist_name}
            purpose={data[4].purpose} 
           />
    </div>

</section>
}

export default Presentation;