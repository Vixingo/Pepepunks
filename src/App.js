import "./App.css";

import Claim from "./pages/Claim";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from "./pages/Wallet";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Claim />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
