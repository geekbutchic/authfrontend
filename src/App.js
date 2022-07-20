import "./App.css";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from './Pages/HomePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationPage />
        <LoginPage />
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
