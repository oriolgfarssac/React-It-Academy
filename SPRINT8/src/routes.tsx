import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Welcome from "./pages/welcome"
import UserPage from "./pages/userPage";

export default () => (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Welcome></Welcome>}> </Route>
    <Route path='/mainPage/' element={<MainPage></MainPage>}></Route>
    <Route path='/userPage/' element={<UserPage></UserPage>}></Route>
    <Route path="*" element={<h1>ERROR 404</h1>}></Route>
    </Routes>
    </BrowserRouter>
);