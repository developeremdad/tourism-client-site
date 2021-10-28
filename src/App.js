import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import ManageOrders from './Components/PrivatePages/ManageOrders/ManageOrders';
import MyOrders from './Components/PrivatePages/MyOrders/MyOrders';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/myOrders">
            <MyOrders />
          </Route>

          <Route path="/manages">
            <ManageOrders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
