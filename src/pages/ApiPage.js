import { Link } from "react-router-dom"
import ApiQR from "../components/ApiQR"

const Api = () => {
  return <section>
    <nav>
        <ul>
            <li><Link to='/'>Domů</Link></li>
            <li>ApiPage</li>
        </ul>
    </nav>
    <ApiQR />
  </section>
}

export default Api