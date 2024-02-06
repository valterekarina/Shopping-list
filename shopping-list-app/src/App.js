import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn  from './components/SignIn';
import SignUp  from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import Recipes from './components/Recipes';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="/login" element = {<SignIn />} />
          <Route path="/register" element = {<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
