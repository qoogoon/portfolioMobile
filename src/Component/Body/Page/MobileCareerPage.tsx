import React from "react"
import style from "./CareerPage.module.scss"
//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard, { PortfolioData } from "./PortfolioCard"
import CareerGraph, { CareerGraphData } from "./CareerGraph"
//#endregion
import back2 from "../../../Resource/back2.jpg"

import MobileImg001 from "../../../Resource/mobile/phc/001.jpg"
import MobileImg002 from "../../../Resource/mobile/phc/002.jpg"
import MobileImg003 from "../../../Resource/mobile/phc/003.jpg"
import MobileImg004 from "../../../Resource/mobile/phc/004.jpg"
import MobileThumbImg001 from "../../../Resource/mobile/phc/thumb.png"

import MobileImg101 from "../../../Resource/mobile/udmpop/001.jpg"
import MobileImg102 from "../../../Resource/mobile/udmpop/002.jpg"
import MobileImg103 from "../../../Resource/mobile/udmpop/003.jpg"
import MobileImg104 from "../../../Resource/mobile/udmpop/004.jpg"
import MobileImg105 from "../../../Resource/mobile/udmpop/005.png"
import MobileImg106 from "../../../Resource/mobile/udmpop/006.png"
import MobileImg107 from "../../../Resource/mobile/udmpop/007.png"
import MobileThumbImg002 from "../../../Resource/mobile/udmpop/thumb.png"

import MobileImg201 from "../../../Resource/mobile/work/001.jpg"

const mobileSkillData: CareerGraphData[] = [
    { name: 'Android', level: 80 },
    { name: 'Kotlin', level: 80 },
    { name: 'Java', level: 80 },
    { name: 'Nodejs express', level: 70 },
    { name: 'MSSQL', level: 70 },
    { name: 'RXAndroid', level: 60 },
    { name: 'ASP.NET', level: 60 },
];
const mobilePortfolio1: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`공장 조립라인의 데이터를 정보화하여 실시간 데이터 및 분석도구 제공.`, `실시간으로 쏟아져나오는 라인의 데이터를 가공하여, 사용자에게 표와 그래프로 정보를 가공.`],
    devDate: "2018/09 ~ 2019/04",
    skill: "#Kotlin #MVVM #Retrofit2 #MSSQL #NodeJS express, #FCM",
    thumbNailImgSrc: MobileThumbImg001,
    title: "스마트팩토리 Mobile"
}
const mobilePortfolio2: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`MES 시스템을 모바일로 처리 및 조회. PDA(Android)바코드로 물류 처리.`, `핸드폰, 테블릿, PDA(Android) 지원. 블루투스 프린터 지원`],
    devDate: "2020-01 ~ 2020-04",
    skill: "#Kotlin #MVVM #RXJava #Retrofit2 #MSSQL #NodeJS express",
    thumbNailImgSrc: MobileThumbImg002,
    title: "MES System Mobile"
}
const mobilePortfolio3: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`작업할당 및 작업완료, 불량, 양품 등을 기록.`, `클라이언트 철판 사출 공장의 업무 효율 상승을 도모`],
    devDate: "2015/02/19 ~ ",
    skill: "#kotlin #MVVM #Nodejs express #MS-SQL #Retrofit2",
    thumbNailImgSrc: MobileImg201,
    title: "철판 사출 공장 작업자 패드"
}

function WebCareerPage() {
    const [isImgPortfolioOpen, setImgPortfolioOpen] = React.useState(false);
    const [imgRouteList, setImgRouteList] = React.useState<string[]>([]);
    const [descripts, setDescripts] = React.useState<string[]>([]);
    const [title, setTitle] = React.useState<string>("");
    const [imgMode, setImgMode] = React.useState<"web" | "mobile">("web");
    return (
        <div>
            <img className={style.background} src={back2} />
            <div className={style.Career}>
                <div className={`${style.layout} ${style.mobile}`}>
                    <div className={style.title} style={{ backgroundColor: "#8884d8" }}>Android</div>
                    <div className={style.content}>
                        <div className={`${style.card} ${style.graph}`}>
                            <CareerGraph data={mobileSkillData} barColor={"#8884d8"} />
                        </div>
                        <div className={`${style.card} ${style.portfoilo}`}>
                            <PortfolioCard className={style.item} data={mobilePortfolio1} type="mobile" onClick={
                                () => {
                                    setImgPortfolioOpen(true)
                                    setImgRouteList([MobileImg001, MobileImg002, MobileImg003, MobileImg004])
                                    setImgMode("mobile")
                                    setDescripts(mobilePortfolio1.descripts)
                                    setTitle(mobilePortfolio1.title)

                                }
                            } />
                        </div>
                        <div className={`${style.card} ${style.portfoilo}`}>
                            <PortfolioCard className={style.item} data={mobilePortfolio2} type="mobile" onClick={
                                () => {
                                    setImgPortfolioOpen(true)
                                    setImgRouteList([MobileImg101, MobileImg102, MobileImg103, MobileImg105, MobileImg106, MobileImg107])
                                    setImgMode("mobile")
                                    setDescripts(mobilePortfolio2.descripts)
                                    setTitle(mobilePortfolio2.title)
                                }
                            } />
                        </div>
                        <div className={`${style.card} ${style.portfoilo}`}>
                            <PortfolioCard className={style.item} data={mobilePortfolio3} type="mobile" onClick={
                                () => {
                                    setImgPortfolioOpen(true)
                                    setImgRouteList([MobileImg201])
                                    setImgMode("mobile")
                                    setDescripts(mobilePortfolio3.descripts)
                                    setTitle(mobilePortfolio3.title)
                                }
                            } />
                        </div>
                    </div>
                </div>

            </div>
            <ImageSlideDialog
                open={isImgPortfolioOpen}
                onClose={() => { setImgPortfolioOpen(false) }}
                imgList={imgRouteList}
                mode={imgMode}
                description={descripts}
                title={title} />
        </div>

    )
}
export default WebCareerPage