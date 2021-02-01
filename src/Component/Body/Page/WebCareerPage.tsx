import React from "react"
// import style from "./CareerPage.module.scss"
import style from "./CareerPage.module.scss"
//#region Component
import ImageSlideDialog from "../../Common/ImageSlideDialog"
import PortfolioCard_New2, { PortfolioData } from "./PortfolioCard"
import CareerGraph, { CareerGraphData } from "./CareerGraph"
//#endregion
import back1 from "../../../Resource/back1.jpg"
import WebImg001 from "../../../Resource/web/phc/001.jpg"
import WebImg002 from "../../../Resource/web/phc/002.jpg"
import WebImg003 from "../../../Resource/web/phc/003.jpg"
import WebImg004 from "../../../Resource/web/phc/004.jpg"
import WebImg005 from "../../../Resource/web/phc/005.jpg"

import WebImg101 from "../../../Resource/web/novel/001.png"
import WebImg201 from "../../../Resource/web/otaku/001.png"
const webSkillData: CareerGraphData[] = [
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Nodejs express', level: 70 },
    { name: 'MSSQL', level: 70 },
    { name: 'Redux', level: 60 },
    { name: 'ASP.NET', level: 60 },
    { name: 'CSS', level: 50 },
    { name: 'SCSS', level: 20 },
];
const webPortfolio1: PortfolioData = {
    company: "근무처 : 유디엠텍",
    descripts:
        [`공장 조립라인의 데이터를 정보화하여 실시간 정보 및 분석도구 제공.`,
            `실시간으로 쏟아져나오는 라인의 데이터를 가공하여, 사용자에게 표와 그래프로 정보를 가공.`],
    devDate: "2020/05/03 ~ 2021/01/26",
    skill: "#React #ASP.NET #MSSQL #SCSS 　　　　　　　　　　　　",
    thumbNailImgSrc: WebImg001,
    title: "스마트팩토리\nDashBoard Web"
}
const webPortfolio2: PortfolioData = {
    company: "개인프로젝트(개발중)",
    descripts:
        [`웹사이트에서 게임을 만들고 모바일 앱에서 즐기는 어플리케이션`, `소설 어드벤쳐 게임인 서울2033을 오마주.`,
            ``],
    devDate: "2020/03/03 ~ ",
    skill: "#React #Redux #Konvajs #FireStore(NoSql) #Firebase Function(NoServer) ",
    thumbNailImgSrc: WebImg101,
    title: "소설게임 생성툴 Web"
}
const webPortfolio3: PortfolioData = {
    company: "개인프로젝트",
    descripts:
        [`만화, 애니, 게임 등을 주제로 시험문제를 만들고 풀어보는 사이트.`, `일 평균 활성 사용자 수 500여명`,
            `PlayStore 10만 다운로드`],
    devDate: "2015/02/19 ~ ",
    skill: "#React #Redux #Nodejs express #MS-SQL #Firebase",
    thumbNailImgSrc: WebImg201,
    title: "매니아 테스트 커뮤니티 반응형 Web"
}
function WebCareerPage() {
    const [isImgPortfolioOpen, setImgPortfolioOpen] = React.useState(false);
    const [imgRouteList, setImgRouteList] = React.useState<string[]>([]);
    const [imgMode, setImgMode] = React.useState<"web" | "mobile">("web");
    const [title, setTitle] = React.useState<string>("");
    const [descripts, setDescripts] = React.useState<string[]>([]);
    return (
        <div>
            <img className={style.background} src={back1} />
            <div className={style.Career}>
                <div className={`${style.layout} ${style.web}`}>
                    <div className={style.title} style={{ backgroundColor: "#84bb74" }}>Web</div>
                    <div className={style.content}>
                        <div className={`${style.card} ${style.graph}`}>
                            <CareerGraph data={webSkillData} barColor={"#84bb74"} />
                        </div>
                        <div className={`${style.card} ${style.portfoilo}`}>
                            <PortfolioCard_New2 className={style.item} data={webPortfolio1} type="web" onClick={
                                () => {
                                    setImgPortfolioOpen(true)
                                    setImgRouteList([WebImg001, WebImg002, WebImg003, WebImg004, WebImg005])
                                    setImgMode("web")
                                    setDescripts(webPortfolio1.descripts)
                                    setTitle(webPortfolio1.title)

                                }
                            } />
                        </div>
                        <div className={`${style.card} ${style.portfoilo}`}>
                            <PortfolioCard_New2 className={style.item} data={webPortfolio3} type="web" onClick={
                                () => {
                                    window.location.assign("https://www.otakutest.kr");
                                }
                            } />
                        </div>
                        <div className={`${style.card} ${style.portfoilo}`}>
                            <PortfolioCard_New2 className={style.item} data={webPortfolio2} type="web" onClick={
                                () => {
                                    window.location.assign("http://www.kumestudio.com:8080");

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