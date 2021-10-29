import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { persistor } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
      </Router>
    </PersistGate>
  );
}

export default App;
