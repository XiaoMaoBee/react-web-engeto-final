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

}

export default App