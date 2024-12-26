import ReactDOM from "react-dom/client"
import {BrowserRouter, Route, Routes} from "react-router"
import App from "./App"
import './index.scss'
import Layout from "@/components/Layout/Layout";
import {Test} from "@/pages/test/Text.lazy";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<App/>}/>
                <Route path="test" element={<Test/>}/>
                <Route path="auth">
                    <Route index element={<p>Login</p>}/>
                    <Route path="register" element={<p>Register</p>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);