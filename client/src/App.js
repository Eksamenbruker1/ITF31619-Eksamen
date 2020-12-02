import './App.css';
import Routes from "./Routes/Routes"
import {BrowserRouter as Router}  from 'react-router-dom';
import Store from "./GlobalState"





function App() {
  return (

      <Router>
        <Routes />
      </Router>
    
  );
}

export default App;
