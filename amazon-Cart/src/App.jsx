import {Routes, Route} from "react-router-dom";
import {WishList} from "./components/WishList.jsx";
import {AmazonStyleCart} from "./components/AmazonStyleCart.jsx";
export const App = () => {
  return(
    <div>
    <Routes>
     <Route path="/" element={<WishList/>}/>
     <Route path="/cart" element={<AmazonStyleCart/>}/>
     </Routes>
    </div>
  )
}
export default App;