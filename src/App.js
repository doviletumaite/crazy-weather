import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { persistor } from './store';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
 <PersistGate persistor={persistor}>
<Router>
  <Route exact path="/" component={Home}/>
</Router>
 </PersistGate>
  );
}

export default App;
