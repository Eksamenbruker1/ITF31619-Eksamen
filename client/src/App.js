import './App.css';
import Routes from "./Routes/Routes"
import {BrowserRouter as Router}  from 'react-router-dom';
import AuthProvider from "./Components/context/AuthProvider";
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("-------------Refresh------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
console.log("--------------------------------------")
function App() {
  return (

    <AuthProvider>
      <meta http-equiv="Pragma" content="no-cache" />
	    <meta http-equiv="Expires" content="0" />
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
