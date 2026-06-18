import {Routes, Route} from "react-router-dom";
import {WishList} from "./components/WishList.jsx";
import {AmazonStyleCart} from "./components/AmazonStyleCart.jsx";
export const App = () => {
  return(
    <Routes>
     <Route path="/" element={<WishList/>}/>
      <Route path="/cart" element={<AmazonStyleCart/>}/>
    </Routes>
  )
}
export default App;
