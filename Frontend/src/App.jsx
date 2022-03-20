import Home from "./pages/Home";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CreateShop from "./pages/CreateShop";
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Navigate,
} from "react-router-dom";
import ProfileUpdate from "./pages/ProfileUpdate";
import ShopHome from "./pages/ShopHome";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path = "/profile" element={<Profile/>}/>
        <Route path ="/product/:id" element={<Product/>}/>
        <Route path = "/create-shop" element={<CreateShop/>}/>
        <Route path = "/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path = "/register" element={user ? <Navigate to="/"/> : <Register/>}/>
      </Routes>
    </Router>
  )
};

export default App;