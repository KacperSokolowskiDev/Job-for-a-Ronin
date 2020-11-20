import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Jobs from "./pages/Jobs/Jobs";
import Profile from "./pages/Profiles/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar  buttons={['MY PROFILE']}/>
          <Home />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/my-profile/:id">
          <Navbar />
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
