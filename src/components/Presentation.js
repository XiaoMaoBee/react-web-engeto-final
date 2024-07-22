import './Presentation.css';
import Card from './ArtCard';
import data from '../data'

const Presentation = () => {
    return <section className='presentation-container'>
        <h1>Facts about topics</h1>

    <div className="cards-container">
        
        <Card style={data[0].style} 
           image={data[0].image}
           studentName={data[0].artist_name}
           level={data[0].skill_level}
           description={data[0].description} 
           />
        <Card style={data[1].style} 
            image={data[1].image}
            studentName={data[1].artist_name}
            level={data[1].skill_level}
            description={data[1].description} 
            />
        <Card style={data[2].style} 
            image={data[2].image}
            studentName={data[2].artist_name}
            level={data[2].skill_level}
            description={data[2].description} 
            />
        <Card style={data[3].style} 
            image={data[3].image}
            studentName={data[3].artist_name}
            level={data[3].skill_level}
            description={data[3].description} 
            />
        <Card style={data[4].style} 
            image={data[4].image}
            studentName={data[4].artist_name}
            level={data[4].skill_level}
            description={data[4].description} 
           />
    </div>

</section>
}

export default Presentation;