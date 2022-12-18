import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Error from "./pages/Error"


function App() {
  return( 
  <BrowserRouter>
  <nav>navbar</nav>
  <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="test" element={<About/>}/>
    <Route path="products" element={<Products/>}/>
    <Route path="*" element={<Error/>}/>
    </Route>
    <Route path="dashboard" element={<div>dispatchEvent</div>}>
      <Route path="istatistik" element={<div>istatistik</div>} />
    </Route>
  </Routes>
  <footer> footer</footer>
  </BrowserRouter>
)}

export default App
