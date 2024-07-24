import "./App.css";
import SentenceChanger from "./components/SentenceChanger";
import Presentation from "./components/Presentation";
import DescriptionBox from "./components/DescriptionBox";

const App = () => {



  return <section className="app-container">

    <div className="web-intro">
    <h1>Sofija's Arts</h1>
    </div>
    <SentenceChanger />
    <Presentation />
    <DescriptionBox />

    </section>  
}

export default App