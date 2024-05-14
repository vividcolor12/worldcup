/** @format */

import React, { useEffect, useState } from "react";
import { GameContainer, ImgContainer, ImgBox, Game, Round } from "./styled";

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
    const [candy, setCandy] = useState(candidate);
    const [winCandy, setwinCandy] = useState([]);
    const [round, setRound] = useState(1); // 이거 왜 1 넣음?? 라운드 값이 있어야 데이터가 되나봄..
    const [game, setGame] = useState(candidate?.length);

    useEffect(() => {
        setCandy(
            candidate
                .map((c) => {
                    return { key: c.key, name: c.name, src: c.src, order: Math.random() };
                    //return { ...candy, order: Math.random() };
                })
                .sort((l, r) => {
                    //sort 함수? 앞의 파라메터
                    return l.order - r.order;
                })
        );
    }, []);

    //...이란 무엇인가?
    // reduce란 무엇인가?
    const handleClick = (e) => {
        setCandy((prev) => {
            const temp = prev.splice(0, 2);
            return prev.filter((filter_e, i) => filter_e.key !== temp.key);
        });
        setRound((prev) => prev + 1);
        setwinCandy((prev) => [...prev, e]);
    };

    //Round 1,2,3,4,5,6,7,8
    //Round
    useEffect(() => {
        if (game === 1) {
            return;
        }
        if (candy.length === 0) {
            setRound(1);
            setwinCandy([]);
            setCandy(winCandy);
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
