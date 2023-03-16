import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "../node_modules/react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
