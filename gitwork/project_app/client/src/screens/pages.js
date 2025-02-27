import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp_page from "./singup_page";
import Login_page from "./login_page";

export default function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login_page />} />
                <Route path='/signup' element={<SignUp_page />} />
            </Routes>
        </BrowserRouter>
    )
};