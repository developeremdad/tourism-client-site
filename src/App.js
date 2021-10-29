import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import ManageOrders from './Components/PrivatePages/ManageOrders/ManageOrders';
import MyOrders from './Components/PrivatePages/MyOrders/MyOrders';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
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

          <PrivateRoute path="/manages">
            <ManageOrders />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
