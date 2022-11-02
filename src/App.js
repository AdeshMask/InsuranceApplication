import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Register from './components/user/UserRegistration';
import Login from './components/user/Login';
import Home from "./components/ClaimInsurance/Home";
import CreateClaim from "./components/CreateClaim/CreateClaim";
import ViewClaim from "./components/ViewClaim/ViewClaim";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register"><Register /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/create"><CreateClaim /></Route>
          <Route path="/view"><ViewClaim /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
