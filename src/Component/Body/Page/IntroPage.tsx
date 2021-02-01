import React from "react"
import style from "./IntroPage.module.scss"
import IntroImage from "Resource/intro.png"
import { Card, CardContent, Typography } from "@material-ui/core"
import MabinogiImg from "../../../Resource/mabinogi.png"
import AndroidImg from "../../../Resource/android.png"
import ReactImg from "../../../Resource/react.png"
import CareerImg from "../../../Resource/career.png"
import HomeImg from "../../../Resource/home.png"
import HobbyImg from "../../../Resource/hobby.png"

interface CardItem {
    title: string;
    content: string;
    imgSrc?: string;
}

const cards: CardItem[] = [
    {
        title: "Web Developer",
        content: "React, Redux, TypeScript, Nodejs express, ASP.NET",
        imgSrc: ReactImg
    },
    {
        title: "Android Developer",
        content: "Kotlin, Java, Retrofit2, Firebase",
        imgSrc: AndroidImg
    },
    {
        title: "개발경력",
        content: "4년차 개발자",
        imgSrc: CareerImg
    },
    {
        title: "거주지",
        content: "수원",
        imgSrc: HomeImg
    },
    {
        title: "취미",
        content: "게임, 웹툰",
        imgSrc: HobbyImg
    },
    {
        title: "밀레시안",
        content: "누렙 13,192 ",
        imgSrc: MabinogiImg
    }
]

function IntroPage() {
    return (
        <div className={style.intro}>
            <div className={`${style.layout} ${style.title}`}>
                <img src={IntroImage} />
                <div className={style.text}>
                    <div>
                        {"안녕하세요!"}
                    </div>
                    <div>
                        {"개발자 '구본주'의"}
                    </div>
                    <div>
                        {
                            "포트폴리오 사이트입니다."
                        }
                    </div>
                </div>
            </div>
            <div className={`${style.layout} ${style.summary}`}>
                <div className={style.about} >
                    <div className={style.text}>{"About me"}</div>
                    <div className={style.line} />
                </div>

                <div className={style.cards} >{cards.map((card, index) => {
                    if (index % 3 === 0) {

                    }
                    return <Card className={style.item} title={card.title} >
                        <CardContent>
                            {card.imgSrc !== undefined ? <img src={card.imgSrc} /> : null}
                            <Typography color="textSecondary" gutterBottom style={{ fontWeight: "bold" }}
                                variant="body1" >
                                {card.title}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom style={{ color: "black" }}
                                variant="body2">
                                {card.content}
                            </Typography>
                        </CardContent>
                    </Card>
                })}</div>
            </div>
        </div>
    )
}

export default IntroPage