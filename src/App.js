import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar/index";
import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Index';


function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
