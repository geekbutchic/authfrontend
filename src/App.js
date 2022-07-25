import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage';
import Navbar from './Components/NavBar'
import "./App.css";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navbar isAuthLoading={isAuthLoading}setIsAuthLoading={setIsAuthLoading}/>}>
          <Route index element={<HomePage/>}/>
          <Route 
          path="login" 
          element={<LoginPage 
          isAuthLoading={isAuthLoading}
          setIsAuthLoading={setIsAuthLoading}
          />}/>
          <Route 
          path="registration" 
          element={<RegistrationPage 
            isAuthLoading={isAuthLoading} 
            setIsAuthLoading={setIsAuthLoading}
          />}
          />
        </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
