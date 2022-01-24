import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products/Products';
// import ProductsPage from './Components/ProductsPage/ProductsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddNewItems from './Components/AddnewItems/AddNewItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addNewItem">
            <AddNewItems></AddNewItems>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
