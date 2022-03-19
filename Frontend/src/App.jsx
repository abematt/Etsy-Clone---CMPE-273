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
        Route
} from "react-router-dom";
import ProfileUpdate from "./pages/ProfileUpdate";
import ShopHome from "./pages/ShopHome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShopHome/>}/>
        <Route path = "/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
};

export default App;