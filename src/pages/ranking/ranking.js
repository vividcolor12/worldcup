/** @format */

import React, { useContext, useState, useEffect } from "react";
import { RankingContext } from "../../App";
import { Container, Contents } from "./styled";

// 랭킹을 표시하는 컴포넌트입니다.
export const Ranking = () => {
    // 랭킹 정보와 설정 함수를 RankingContext에서 가져옵니다.
    const { value, setValue } = useContext(RankingContext);
    // 컨텐츠 상태를 설정합니다. 초기값은 null입니다.
    const [contents, setContents] = useState(null);

    // 랭킹 정보가 변경될 때마다 실행되는 부수 효과입니다.
    useEffect(() => {
        // 랭킹 정보를 점수를 기준으로 내림차순으로 정렬하여 컨텐츠 상태로 설정합니다.
        setContents(
            value.sort((l, r) => {
                return r.score - l.score;
            })
        );
    });

    return (
        // 랭킹을 표시할 컨테이너를 렌더링합니다.
        <Container>
            {/* 컨텐츠가 존재하는 경우 각각의 랭킹 정보를 표시합니다. */}
            {contents?.map((e, i) => {
                return (
                    // 각 랭킹 정보를 컨텐츠 컴포넌트로 렌더링합니다.
                    <Contents key={i}>
                        {/* 랭킹 정보의 이름과 점수를 표시합니다. */}
                        {e.name} {"   "} {e.score}
                    </Contents>
                );
            })}
        </Container>
    );
};
