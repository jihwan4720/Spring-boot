import React from "react";
import "./SanhaLogin.css";

function SanhaLogin() {

    return (
        <div className="sanhaLogin">
            <div className="contentArea">
                <hr className="line"/>
                <h1 className="title">산하정보기술 로그인</h1>

                <p className="emailText">Email address</p>
                <input className="input" type="text" placeholder="Enter email" />

                <p className="passText">Password</p>
                <input className="input" type="password" placeholder="Enter password" />

                <br /><br />
                <label className="checkboxText"><input className="checkbox" type="checkbox" /> Remember me </label>
                
                <p className="link">해당 링크를 클릭하세요</p>
            </div>
        </div>
    );
};


export default SanhaLogin;