/** @format */

import React, { useContext, useEffect, useState } from "react";
import { GameContainer, ImgContainer, ImgBox, Game, Round } from "./styled";
import { RankingContext } from "../../App"; //App.js의 RankingContext를 가져옵니다.
import { useNavigate } from "react-router-dom";

//월드컵 대상자 이미지 파일을 import
import p0 from "../../assets/img/Ami.jpg";
import p1 from "../../assets/img/Azusa.jpg";
import p2 from "../../assets/img/Chihaya.jpg";
import p3 from "../../assets/img/Haruka.jpg";
import p4 from "../../assets/img/Hibiki.jpg";
import p5 from "../../assets/img/iori.jpg";
import p6 from "../../assets/img/Makoto.jpg";
import p7 from "../../assets/img/Mami.jpg";
import p8 from "../../assets/img/Miki.jpg";
import p9 from "../../assets/img/Mirai.jpg";
import p10 from "../../assets/img/Rituko.jpg";
import p11 from "../../assets/img/Sizuka.jpg";
import p12 from "../../assets/img/Takane.jpg";
import p13 from "../../assets/img/Tubasa.jpg";
import p14 from "../../assets/img/Yayoi.jpg";
import p15 from "../../assets/img/Yukiho.jpg";

// 후보자 정보를 배열로 저장합니다. (더미데이터 )
const candidate = [
    { key: 0, name: "후타미 아미", src: p0 },
    { key: 1, name: "미우라 아즈사", src: p1 },
    { key: 2, name: "키사라기 치하야", src: p2 },
    { key: 3, name: "아마미 하루카", src: p3 },
    { key: 4, name: "가나하 히비키", src: p4 },
    { key: 5, name: "미나세 이오리", src: p5 },
    { key: 6, name: "키쿠치 마코토", src: p6 },
    { key: 7, name: "후타미 마미", src: p7 },
    { key: 8, name: "호시이 미키", src: p8 },
    { key: 9, name: "카스가 미라이", src: p9 },
    { key: 10, name: "아키즈키 리츠코", src: p10 },
    { key: 11, name: "모가미 시즈카", src: p11 },
    { key: 12, name: "시죠 타카네", src: p12 },
    { key: 13, name: "이부키 츠바사", src: p13 },
    { key: 14, name: "타카츠키 야요이", src: p14 },
    { key: 15, name: "하기와라 유키호", src: p15 },
];

export const Main = () => {
    // 후보자 배열과 승자 후보 배열, 라운드 및 게임 상태를 저장하는 상태 변수들을 선언합니다.
    const [candy, setCandy] = useState(candidate);
    const [winCandy, setwinCandy] = useState([]);
    const [round, setRound] = useState(1); // 현재 라운드를 나타냅니다.
    const [game, setGame] = useState(candidate?.length); // 현재 게임 상태를 나타냅니다.

    // 랭킹 컨텍스트를 가져옵니다.
    const { value, setValue } = useContext(RankingContext);
    const navigate = useNavigate(); // React Router의 navigate 훅을 사용하여 페이지 이동을 처리합니다.

    useEffect(() => {
        // 처음 마운트될 때 후보자 배열을 무작위로 섞어 초기화합니다.
        setCandy(
            candidate
                .map((c) => {
                    return { key: c.key, name: c.name, src: c.src, order: Math.random() };
                })
                .sort((l, r) => {
                    return l.order - r.order;
                })
        );
    }, []);

    //...이란 무엇인가?
    // reduce란 무엇인가?
    // 후보자 클릭 이벤트를 처리합니다.
    const handleClick = (e) => {
        // 선택된 후보를 승자 후보 배열에 추가하고 후보자 배열에서 제거합니다.
        setCandy((prev) => {
            const temp = prev.splice(0, 2);
            return prev.filter((filter_e, i) => filter_e.key !== temp.key);
        });
        setRound((prev) => prev + 1); // 라운드를 증가시킵니다.
        setwinCandy((prev) => [...prev, e]); // 기존 Candy 배열 값을 복사 후 e 값을 추가한다.
    };

    //Round 1,2,3,4,5,6,7,8
    //Round
    // const rank = () => {
    //     const temp = candidate.map((e) => {
    //         if (e.score) {
    //             if (e.key === candy[0].key) {
    //                 return {
    //                     key: e.key,
    //                     name: e.name,
    //                     src: e.src,
    //                     score: e.score++,
    //                 };
    //             }
    //             return {
    //                 key: e.key,
    //                 name: e.name,
    //                 src: e.src,
    //                 score: e.score,
    //             };
    //         } else {
    //             if (e.key === candy[0].key) {
    //                 return {
    //                     key: e.key,
    //                     name: e.name,
    //                     src: e.src,
    //                     score: 1,
    //                 };
    //             }
    //             return {
    //                 key: e.key,
    //                 name: e.name,
    //                 src: e.src,
    //                 score: 0,
    //             };
    //         }
    //     });
    //     setValue(temp);
    //     navigate("/ranking");
    // };

    // 현재 라운드 결과를 반영하여 랭킹을 갱신하고 랭킹 페이지로 이동합니다.
    const rank = () => {
        if (value.length > 0) {
            setValue((prev) => {
                const temp = prev.map((e, i) => {
                    if (candy[0].key === e.key) {
                        const temp = e.score + 1;
                        return { key: e.key, name: e.name, src: e.src, score: temp };
                    } else return { key: e.key, name: e.name, src: e.src, score: e.score };
                });
                return temp;
            });
        } else {
            const temp = candidate.map((e, i) => {
                if (candy[0].key === e.key) {
                    return { key: e.key, name: e.name, src: e.src, score: 1 };
                } else {
                    return { key: e.key, name: e.name, src: e.src, score: 0 };
                }
            });
            setValue(temp);
        }
        navigate("/ranking");
    };

    useEffect(() => {
        if (game === 1) {
            rank();
            return;
        }
        if (candy.length === 0) {
            setRound(1);
            setCandy(winCandy);
            setwinCandy([]);
            setGame((prev) => prev / 2);
        }
    }, [round]);

    return (
        <>
            {game === 1 ? (
                <Game>Win!</Game>
            ) : game === 2 ? (
                <Game>決勝 결승 </Game>
            ) : (
                <Game>
                    {game}
                    {"강"}
                </Game>
            )}
            {game > 2 && (
                <Round>
                    {round}
                    {"Round"}
                </Round>
            )}

            <GameContainer>
                {candy.map((e, i) => {
                    if (i > 1) return;
                    return (
                        <ImgContainer onClick={() => handleClick(e)}>
                            <ImgBox src={e.src} />
                            {e.name}
                        </ImgContainer>
                    );
                })}
            </GameContainer>
        </>
    );
};
