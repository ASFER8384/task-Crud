import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./component/Header/Header";
import Create from "./Page/Create"
import Read from "./Page/Read"
import EditCom from "./component/Edit/Edit";
// https://639b20c6d5141501974c2da2.mockapi.io/crud


function App() {
  return (
    <>
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Create/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/edit/:id" element={<EditCom/>}/>
    </Routes>
    </BrowserRouter>
   </div>
    </>
  );
}

export default App;
