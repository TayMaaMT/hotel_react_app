import Home from "./pages/Home";
import Details from "./pages/Details";
import GlobalStyles from "./components/globals/GlobalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <GlobalStyles/>
    <Router>
      <Switch>
        <Route path="/hotel/:owner_id/:id">
          <Details />
        </Route>
        <Route path="/">
           <Home/>
        </Route>
      </Switch>
  </Router>
  </>
  );
}

export default App;
