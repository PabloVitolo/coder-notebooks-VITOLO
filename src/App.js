import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import * as React from "react";


function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting="Esto es CoderNotebooks" />
        <ItemCount initial={1} stock={5} />
      </div>
  );
}

export default App;
