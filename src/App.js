import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage';
import Navbar from './Components/NavBar'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navbar/>}>
          <Route index element={<HomePage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="registration" element={<RegistrationPage/>}/>
        </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
