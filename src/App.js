import { BrowserRouter,Routes, Route } from "react-router-dom";
import {AdminLogin} from "./components/admins/adminLogin/AdminLogin"
import {AdminSignup} from "./components/admins/adminSignup/AdminSignup"
import {UserSignup} from "./components/user/userSignup/UserSignup"
import {UserLogin} from "./components/user/userLogin/UserLogin"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route path="/admin/signup" element={<AdminSignup/>}/>
      <Route path="/admin/signin" element={<AdminLogin/>}/>
      <Route path="/user/signin" element={<UserLogin/>}/>
      <Route path="/user/singup" element={<UserSignup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
