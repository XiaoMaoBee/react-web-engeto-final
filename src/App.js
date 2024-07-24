import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* import SentenceChanger from "./components/SentenceChanger";
import Presentation from "./components/Presentation";
import DescriptionBox from "./components/DescriptionBox"; */
import Home from "./pages/Home";
import Api from "./pages/ApiPage";

const App = () => {


  return <BrowserRouter>
  <Routes>

    <Route path='/' element={ <Home /> } />
    <Route path='/apiPage' element={ <Api /> } />

  </Routes>
  
  </BrowserRouter>



  /* return <section className="app-container">

    <div className="web-intro">
    <h1>Sofija's Arts</h1>
    </div>
    <SentenceChanger />
    <Presentation />
    <DescriptionBox />

    </section>   */
}

export default App