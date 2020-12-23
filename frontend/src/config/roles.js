import Login from "../containers/pages/Login/Login";
import Register from "../containers/pages/Register/Register";
import SetDate from "../containers/pages/SetDate/SetDate";
import CustomCake from "../containers/pages/CustomCake/CustomCake";
import WishList from "../containers/pages/FavList/FavList";
import LandlingPage from "../containers/pages/Landing/Landing";
import MyOrders from "../containers/pages/Order/Order";

const components = {
  landing: {
    path: "/index",
    page: LandlingPage
  },
  login: {
    path: "/",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  },
  wishList: {
    path: "/wish-list",
    page: WishList
  },
  customCake: {
    path: "/custom-cake",
    page: CustomCake
  },
  setDate: {
    path: "/set-date",
    page: SetDate
  },
  myOrders: {
    path: "/orders",
    page: MyOrders
  },
};

const roles = {
  GUEST: [
    components.login,
    components.register,
    components.landing,
    components.setDate,
    components.customCake,
  ],
  USER: [
    components.myOrders,
    components.wishList,
  ]
}

export default roles;