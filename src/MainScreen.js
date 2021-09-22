import React from "react";
import "./MainScreen.css";


function MainScreen() {
    return (
        <div className="MainScreen">
            <div className="topArea">
                <p>Sanha Infomation Technology</p>
            </div>
            <div className="leftArea">
                <p className="leftAreaTitle">메인화면</p>
                <ul className="menulist">
                    <a href="#"><li className="menuitem">강의 관리</li></a>
                    <a href="#"><li className="menuitem">시험 관리</li></a>
                    <a href="#"><li className="menuitem">고객 관리</li></a>
                    <a href="#"><li className="menuitem">평가 관리</li></a>
                </ul>
            </div>
            <div className="contentArea">
                <p className="contentAreaTitle">SanhaIT DashBoard</p>
                <div className="contentDataArea">
                    <div className="contentDataTitle">시험 관리</div>
                    <div className="contentData">홍길동&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1분기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제출 완료&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021-09-16 23:11</div>
                    <div className="contentData">홍길동1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1분기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제출 완료&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021-09-16 23:11</div>
                    <div className="contentData">홍길동2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1분기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제출 완료&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021-09-16 23:11</div>
                </div>
            </div>

        </div>
    );
}

export default MainScreen;