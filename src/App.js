import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RoundOne from './assets/images/Ellipse 145.svg'
import RoundTwo from './assets/images/Ellipse 146.svg'
import RoundThree from './assets/images/Ellipse 147.svg'
import S1 from './assets/images/Group 45.svg'
import S2 from './assets/images/Group 48.svg'
import S3 from './assets/images/Group 49.svg'
import S4 from './assets/images/Group -3.svg'
import Mars from './assets/images/Group 114.svg'
import SD1 from './assets/images/Group 35.svg'
import SD2 from './assets/images/Group 32.svg'
import Sun from './assets/images/Sun.svg'
import LogoOpacity from './assets/images/logoOpacity.png'

function App() {
    const [messageState, setMessageState] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [text, setText] = useState("");
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function showMessage() {
        if (text!="" && validateEmail(text) && !messageState){
            setMessage("هممم، سپاس")
            setMessageState(true)
            setType("success")
            setText("")
            setTimeout(function () {
                setMessageState(false)
            },2590)
        } else if(!messageState){
            setMessage("ایمیلتون رو بنویسید :)")
            setMessageState(true)
            setType("error")
            setTimeout(function () {
                setMessageState(false)
            },2590)
        }
    }
    function setNewText(i){
        setText(i.target.value.toString())
    }
    return (
      <div className="app">
          <div className="container-fluid">
              <img src={logo} className="App-logo position-absolute" alt="logo" />
              <div className={"notification "+type} style={messageState?{display:"inherit"}:{display:"none"}}>
                  {/*<img src={Mars} className="notificationIcon" alt=""/>*/}
                  {message.toString()}
              </div>
              <div className="row main">
                      <div className="col-md-6 col-xl-6 col-sm-12 sunSystem">
                          <img src={Sun} className="float-right rounds sun" alt="logo" />
                          <img src={RoundOne} className="float-right r1 rounds" alt="logo" />
                          <img src={S1} className="float-right rounds s1" alt="logo" />
                          <img src={RoundTwo} className="float-right r2 rounds" alt="logo" />
                          <img src={S2} className="float-right rounds s2" alt="logo" />
                          <img src={RoundThree} className="float-right r3 rounds" alt="logo" />
                          <img src={S3} className="float-right rounds s3" alt="logo" />
                          <img src={S4} className="float-right rounds s4" alt="logo" />
                      </div>
                      <div className="col-md-6 col-xl-6 col-sm-12">
                        <div className="info">
                            <h2>پا به دنیای جدیدی بزاریم</h2>
                            <p>توی این دنیا قراره که با هم کارایی بکنیم که
                                درس خوندن رو برامون ساده کنه</p>
                            <a href="#email" className="shadow_button">
                                ثبت نام
                            </a>
                        </div>
                      </div>
              </div>
              <div className="row mt-2 sarea">
                  <div className="col-md-3 col-xl-4 col-sm-12">
                      <img src={SD2} className="P1" alt=""/>
                  </div>
                  <div className="col-md-6 col-xl-4 col-sm-12">
                      <div className="signUp" id='new'>
                          <h2>نام نویسی در رولا</h2>
                          <p>با عضویت زود هنگام در رولا شما کاربر ویژه ما خواهید شد</p>
                          <div className="inputPhone">
                              <form action="#email"  onSubmit={showMessage}>
                                  <input type="text" id="email" className="input" placeholder=" eg Loverdeveloper@outlook.com" value={text} onChange={setNewText}/>
                                  <button type="submit" className="shadow_button_form" >
                                      بفرست
                                  </button>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3 col-xl-4 col-sm-12">
                      <img src={SD1} className="P2" alt=""/>
                  </div>
              </div>
          </div>
          <div className="copyright">
              Development Team
              <img src={LogoOpacity} alt="logo" />
          </div>
      </div>
  );
}

export default App;
