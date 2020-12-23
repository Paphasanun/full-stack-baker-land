// import { useState } from "react";
import "./App.less";
import "antd/dist/antd.less";
// import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
// import LocalStorageService from "./services/LocalStorageService";
import Login from "../src/containers/pages/Login/Login";
import Register from "../src/containers/pages/Register/Register";
import SetDate from "../src/containers/pages/SetDate/SetDate";
import CustomCake from "../src/containers/pages/CustomCake/CustomCake";
import WishList from "../src/containers/pages/FavList/FavList";
import LandingPage from "../src/containers/pages/Landing/Landing";
import MyOrders from "../src/containers/pages/Order/Order";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";


function App() {
  // const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    // <div className="App">
    //   <PrivateRoutes role={role} setRole={setRole} />
    // </div>

    <div className="body-wrap">
      <Navbar/>
      <Switch>
        <LandingPage exact path="/" />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/set-date" component={SetDate} />
        <Route exact path="/custom-cake" component={CustomCake} />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/orders" component={MyOrders} />
      </Switch>
    </div>
  );
}

export default App;
