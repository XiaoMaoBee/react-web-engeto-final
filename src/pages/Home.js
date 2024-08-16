import SentenceChanger from "../components/SentenceChanger";
import Presentation from "../components/Presentation";
import DescriptionBox from "../components/DescriptionBox";
import ArtCard from "../components/ArtCard";
import { Link } from "react-router-dom";
import './home.css'

const Home = () => {
    return <section className="app-container">
        <nav>
            <ul>
                <li className="li-home">Home</li>
                <li><Link to='./ApiPage'>ApiPage</Link></li>
            </ul>
        </nav>

    <div>
    <h1>Sofija's Arts</h1>
    </div>
    <SentenceChanger />
    <Presentation />
    <DescriptionBox />

    </section> 
}

export default Home