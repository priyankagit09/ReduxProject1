import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import ProductListing from "./components/ProductListing";
import ProductDetails from './components/ProductDetails'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetails/>}/>
      <Route>404 not found </Route>
      </Routes>
      </BrowserRouter>
      
  
    </div>
  );
}

export default App;
