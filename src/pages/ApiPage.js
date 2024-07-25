import { Link } from "react-router-dom";
import ApiQR from "../components/ApiQR";
import './ApiPage.css';

const Api = () => {
  return <section className="api-page-container">
    <nav>
        <ul>
            <li className="li-home"><Link to='/'>Domů</Link></li>
            <li>ApiPage</li>
        </ul>
    </nav>
    <ApiQR />
  </section>
}

export default Api