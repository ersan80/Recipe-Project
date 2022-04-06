import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/recipe/Main";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Details from "./components/details/Details";
function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <Routes> 
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route path="/details" element={<Details></Details>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
