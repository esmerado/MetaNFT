import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/shop" element={<ShoppingCart />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
