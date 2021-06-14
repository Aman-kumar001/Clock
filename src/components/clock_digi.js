import { useState } from 'react';
const ClockDigital = () => {
    const hours=new Date().getHours()>12?new Date().getHours()-12:new Date().getHours();
    const mins=new Date().getMinutes();
    const sec=new Date().getSeconds();
    // const time=hours+":"+mins+":"+sec;
    const[h,setHr]=useState(hours);
    const[m,setMin]=useState(mins);
    const[s,setSec]=useState(sec);

    setInterval(()=>{
        const hours1=new Date().getHours()>12?new Date().getHours()-12:new Date().getHours();
        const mins1=new Date().getMinutes();
        const sec1=new Date().getSeconds();
        if(sec1!==s){
          setSec(sec1)
        }
        if(mins1!==m){
          setMin(mins1)
        }
        if(hours1!==h){
          setHr(hours1)  
        }
  
      },1000)

    return ( 
        <div className="digial">
            <div className="board">
                <div className="hour box">
                    <div className="hour-top top">
                        { (m===0 && s==0) && <div id="flipper"></div>}
                        <h1>{h}</h1>
                        <hr/>
                        <h2>Hours</h2>
                    </div>
                    {/* <div className="hour-bottom bottom"></div> */}
                </div>
                <div className="mins box">
                    <div className="mins-top top">
                        <h1>{m}</h1>
                        <hr/>
                        <h2>Minutes</h2>
                        { s===0 && <div id="flipper"></div>}
                    </div>
                    {/* <div className="hour-bottom bottom"></div> */}
                </div>
                <div className="secs box">
                    <div className="secs-top top">
                        {/* <div className="blocker"></div> */}
                        <h1>{s}</h1>
                        <hr/>
                        <h2>Seconds</h2>
                        <div id="flipper"><h1>{s}</h1></div>
                    </div>
                    {/* <div className="hour-bottom bottom"></div> */}
                </div>
            </div>
            <div className="AmPm">
                <p className={new Date().getHours()<=12?"current":"notCurrent"}>AM</p>
                <p className={new Date().getHours()>12?"current":"notCurrent"}>PM</p>
            </div>
        </div>
     );
}
 
export default ClockDigital;