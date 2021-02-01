import React from "react"
import style from "./PortfolioCard.module.scss"

export interface PortfolioData {
    thumbNailImgSrc: string,
    title: string,
    company: string,
    devDate: string,
    descripts: string[],
    skill: string,
}
interface PortfolioCardProps {
    onClick: () => void,
    data: PortfolioData,
    className?: string,
    type: "web" | "mobile"
}
export default function PortfolioCard(props: PortfolioCardProps) {
    const { onClick, className, data } = props
    const { company, devDate, skill, thumbNailImgSrc, title } = data
    return <div className={`${className} ${style.container}`} onClick={onClick}>
        <div className={style.col1}>
            <img className={style.item} src={thumbNailImgSrc}></img>

            <div className={`${style.item} ${style.title}`}>{title}</div>
            <div className={`${style.item} ${style.devDate}`}>{devDate}</div>
            <div className={`${style.item} ${style.company}`}>{company}</div>
            <div className={`${style.item} ${style.skill}`}>{skill}</div>
        </div>
    </div>
}
