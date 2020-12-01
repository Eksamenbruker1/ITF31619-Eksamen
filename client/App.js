import './App.css';
import Routes from "./src/utils/Components/Routes/Routes"
import {BrowserRouter as Router}  from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
