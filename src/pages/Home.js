import SentenceChanger from "../components/SentenceChanger";
import Presentation from "../components/Presentation";
import DescriptionBox from "../components/DescriptionBox";
import { Link } from "react-router-dom";

const Home = () => {
    return <section className="app-container">
        <nav>
            <ul>
                <li>Home</li>
                <li><Link to='./ApiPage'>ApiPage</Link></li>
            </ul>
        </nav>

    <div className="web-intro">
    <h1>Sofija's Arts</h1>
    </div>
    <SentenceChanger />
    <Presentation />
    <DescriptionBox />

    </section> 
}

export default Home