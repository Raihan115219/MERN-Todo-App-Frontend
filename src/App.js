import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />
          <Route path="*" element="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
