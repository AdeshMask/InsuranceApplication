import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import User from './components/user/UserRegistration';
import Login from './components/user/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user"><User /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
