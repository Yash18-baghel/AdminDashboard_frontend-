import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Protected from './Protected';
import SignUp from './Pages/SignUp';
import Create from './Pages/Create';
import Edit from './Pages/Edit';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<SignUp/>} />
          <Route path="Home" element={<Protected Cmp = {Home }/>} />
          <Route path="Addproduct" element={<Protected Cmp = {Create }/>} />
          <Route path={`Edit/:id`} element={<Protected Cmp = {Edit }/>} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
