import './App.css';
import Routes from "./Routes/Routes"
import {BrowserRouter as Router}  from 'react-router-dom';
import AuthProvider from "./Components/context/AuthProvider";

function App() {
  return (

    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
