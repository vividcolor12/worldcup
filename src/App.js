/** @format */

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "../src/pages/main/main";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Navigate to={"/Main"} />} />
                <Route exact path="/main" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
