import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn  from './components/SignIn';
import SignUp  from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    // //<div className="App">
    //   <BrowserRouter>
    //   <Switch>
    //   <div className="App">
    //     <Route exact path="/login" component = {LoginContainer}/>
    //   </div>
    //   </Switch>
    //   </BrowserRouter>
    // //</div>

    // <SignIn />
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="/login" element = {<SignIn />} />
          <Route path="/register" element = {<SignUp />} />
          {/* <Route path="*" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
