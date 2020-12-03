import './App.css';
import Routes from "./src/utils/Routes/Routes"
import {BrowserRouter as Router}  from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
