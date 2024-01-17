import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuotePage from "./pages/quotePage";
import WelcomePage from "./pages/welcomePage";

export default () => (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<WelcomePage />}> </Route>
    <Route path='/quotePage/' element={<QuotePage />}></Route>
    **<Route path="*" element={<h1>ERROR 404</h1>}></Route>
    </Routes>
    </BrowserRouter>
);