import Home from "./pages/Home";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CreateShop from "./pages/CreateShop";
import ShopHome from "./pages/ShopHome";
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Navigate,
        useNavigate,
} from "react-router-dom";
import ProfileUpdate from "./pages/ProfileUpdate";

import { useSelector } from "react-redux";


const App = () => {
  // let navigate = useNavigate();
  const user = useSelector(state=>state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user? <Home/>: <Navigate to="/login"/>}/>
        <Route path = "/profile" element={<Profile/>}/>
        <Route path ="/product/:id" element={<Product/>}/>
        <Route path = "/create-shop" element={<CreateShop/>}/>
        <Route path = "/shop-home" element={<ShopHome/>}/>
        <Route path = "/login" element={user? <Navigate to="/"/> : <Login/>}></Route>
        <Route path = "/register" element={ <Register/>}/>
        <Route path = "/cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
  )
};

export default App;