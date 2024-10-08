import { Link } from "react-router-dom";
import ApiQR from "../components/ApiQR";
import "./apiPage.css";

const Api = () => {
  return (
    <section className="api-page-container">
      <nav>
        <ul>
          <li className="li-home">
            <Link to="/">Home</Link>
          </li>
          <li>ApiPage</li>
        </ul>
      </nav>
      <ApiQR />
    </section>
  );
};

export default Api;
