/** @format */

import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "../src/pages/main/main";
import { Ranking } from "./pages/ranking/ranking";
import { Header } from "./components/header";

// RankingContext를 생성하여 다른 컴포넌트에서 공유할 수 있도록 합니다.
export const RankingContext = createContext(null);

// 애플리케이션의 진입점인 App 컴포넌트입니다.
function App() {
    // RankingContext의 값을 관리하기 위한 상태와 설정 함수를 생성합니다.
    const [value, setValue] = useState([]);

    return (
        // RankingContext.Provider를 사용하여 RankingContext의 값을 하위 컴포넌트에 제공합니다.
        <RankingContext.Provider value={{ value, setValue }}>
            {/* 라우터를 사용하여 페이지 간의 이동을 관리합니다. */}
            <Router>
                {/* 헤더 컴포넌트를 렌더링합니다. */}
                <Header />
                {/* 페이지의 경로별로 컴포넌트를 렌더링합니다. */}
                <Routes>
                    {/* "/" 경로로 접근하면 "/main"으로 자동으로 이동합니다. */}
                    <Route exact path="/" element={<Navigate to={"/main"} />} />
                    {/* "/main" 경로로 접근하면 Main 컴포넌트를 렌더링합니다. */}
                    <Route exact path="/main" element={<Main />} />
                    {/* "/ranking" 경로로 접근하면 Ranking 컴포넌트를 렌더링합니다. */}
                    <Route exact path="/ranking" element={<Ranking />} />
                </Routes>
            </Router>
        </RankingContext.Provider>
    );
}

export default App;
