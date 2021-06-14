import { useState, useEffect } from 'react';
import React from 'react'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const ClockAnalog = () => {

    const { height, width } = useWindowDimensions();
    
    const hours=new Date().getHours()>12?new Date().getHours()-12:new Date().getHours();
    const mins=new Date().getMinutes();
    const sec=new Date().getSeconds();
    // const time=hours+":"+mins+":"+sec;
    const[h,setHr]=useState(hours);
    const[m,setMin]=useState(mins);
    const[s,setSec]=useState(sec);


    // console.log(time);
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
        <div className="clock_analog">
            <svg height="100vh" width="100vw"
            style={{
              transformOrigin:"50vw 40vh",
              position:"absolute",
              top:'0',
              left:'0'
          }}>
                <circle r={width>height?"25vh":"25vw"} cx="50vw" cy="40vh" fill="black" strokeWidth="7"
                fillOpacity="0"
                stroke="black"
                />
            </svg>
                
            <svg
             style={{transform:`rotateZ(${h*30 + m/2}deg)`,       transformOrigin:"50vw 40vh",
              position:"absolute",
              top:'0',
              left:'0'
            }}
            //  className={classes.hour}
              height="100vh" 
             width="100vw">
                <line x1={width*0.5} y1={height*0.25} x2={width*0.5} y2={height*0.4} stroke="black" strokeWidth="5" />
            </svg>
            <svg 
            // className={classes.minute} 
            style={{
              transform:`rotateZ(${m*6}deg)`, transformOrigin:"50vw 40vh",
              position:"absolute",
              top:'0',
              left:'0'}}
            height="100vh"
             width="100vw">
                <line x1={width*0.5} y1={height*0.2} x2={width*0.5} y2={height*0.4} stroke="black" strokeWidth="7" />
            </svg>
            <svg 
              style={{
                transform:`rotateZ(${s*6}deg)`,transformOrigin:"50vw 40vh",
                position:"absolute",
                top:'0',
                left:'0'}}
              height="100vh" 
              width="100vw">
                <line x1={width*0.5} y1={height*0.2} x2={width*0.5} y2={height*0.4} stroke="red" strokeWidth="2" />
            </svg>
        </div>
     );
}
 
export default ClockAnalog;