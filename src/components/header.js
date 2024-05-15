/** @format */

import React from "react";
import { HeaderContainer, Navbar, HeaderContents, Navbarontents } from "./styled";
import { useNavigate } from "react-router-dom";

// 웹 페이지의 헤더를 나타내는 컴포넌트입니다.
export const Header = () => {
    // 페이지 이동을 위한 navigate 함수를 가져옵니다.
    const navigate = useNavigate();

    return (
        // 헤더 컨테이너를 렌더링합니다.
        <>
            <HeaderContainer>
                {/* 헤더 내용을 표시합니다. */}
                <HeaderContents>Header</HeaderContents>
                {/* 네비게이션 바를 렌더링합니다. */}
                <Navbar>
                    {/* "game"을 클릭하면 "/main"으로 이동하도록 합니다. */}
                    <Navbarontents onClick={() => navigate("/main")}>game</Navbarontents>
                    {/* "ranking"을 클릭하면 "/ranking"으로 이동하도록 합니다. */}
                    <Navbarontents onClick={() => navigate("/ranking")}>ranking</Navbarontents>
                </Navbar>
            </HeaderContainer>
        </>
    );
};
