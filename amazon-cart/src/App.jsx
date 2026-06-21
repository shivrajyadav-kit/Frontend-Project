import {Routes, Route} from "react-router-dom";
import {WishList} from "./components/index.js"
import {AmazonStyleCart} from "./components/index.js";
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
