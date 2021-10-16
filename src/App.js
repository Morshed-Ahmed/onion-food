import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Payments from './components/Payments/Payments';
import Shipping from './components/Shipping/Shipping';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Footer from './components/Footer/Footer';
import Products from './components/Product/Products';
import ProductDtl from './components/ProductDtl/ProductDtl';



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* <Route path="/products">
              <Products></Products>
            </Route> */}
            <Route path="/produ/:productsId">
              <ProductDtl></ProductDtl>
            </Route>
            <PrivateRoute path="/payment">
              <Payments></Payments>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  )


}

export default App;
