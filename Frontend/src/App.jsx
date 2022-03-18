import Home from "./pages/Home";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import {
        BrowserRouter as Router,
        Routes,
        Route
} from "react-router-dom";
import ProfileUpdate from "./pages/ProfileUpdate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProfileUpdate/>}/>
        <Route path = "/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
};

export default App;