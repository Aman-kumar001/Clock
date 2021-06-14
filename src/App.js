import './App.css';
import ClockAnalog from './components/clock_analog';
import ClockDigital from './components/clock_digi';
import { useState, useEffect } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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


function App() {
  const [counter,setcount]=useState(0);
  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <div className="slider">
        <div className={counter%2===0?"slider_left":"fade-left"}
          onClick={()=>{
            setcount(counter+1);
          }}
        >
          <AccessTimeIcon style={{
            fontSize:"7vh",
            color:""
          }}/>
        </div>
        <div className={counter%2===0?"fade-right":"slider_right"}
          onClick={()=>{
            setcount(counter+1);
          }}
        >
            <svg id="Capa_1" enable-background="new 0 0 512 512" height="7vh" viewBox="0 0 512 512" width="7vh" xmlns="http://www.w3.org/2000/svg"><g><path d="m482 106.439h-6.635v-49.377c0-10.577-8.605-19.182-19.182-19.182h-54.75c-10.577 0-19.183 8.605-19.183 19.182v49.377h-25.819l-21.325-56.181c-2.809-7.404-10.016-12.378-17.935-12.378h-122.342c-7.919 0-15.126 4.975-17.934 12.375l-21.326 56.184h-25.819v-49.377c0-10.577-8.605-19.182-19.183-19.182h-54.75c-10.577 0-19.182 8.605-19.182 19.182v49.377h-6.635c-16.542 0-30 13.458-30 30v236.882c0 16.542 13.458 30 30 30h10.852v49.105c0 11.962 9.732 21.694 21.694 21.694h95.976c11.962 0 21.695-9.732 21.695-21.694v-49.105h151.567v49.105c0 11.962 9.732 21.694 21.695 21.694h95.976c11.962 0 21.694-9.732 21.694-21.694v-49.105h10.851c16.542 0 30-13.458 30-30v-236.882c0-16.542-13.458-30-30-30zm-69.75-38.559h33.115v38.559h-33.115zm-209.956 0h107.413l14.636 38.559h-136.686zm-135.659 0h33.115v38.559h-33.115zm83.581 376.24h-79.364v-40.799h79.365v40.799zm290.932 0h-79.365v-40.799h79.365zm-411.148-70.799v-236.882h452l.019 236.881c0 .001-452.018.001-452.019.001z"/><path d="m107.256 230.246c8.899-13.163 17.906-20.215 18.237-20.469 6.602-4.955 7.961-14.318 3.03-20.948-4.943-6.647-14.341-8.027-20.988-3.083-1.646 1.224-40.135 30.451-46.875 85.249-4.683 29.534 18.25 55.984 47.779 55.984 26.678 0 48.381-21.704 48.381-48.381.001-26.977-22.23-49.011-49.564-48.352zm1.184 66.733c-10.135 0-18.381-8.246-18.381-18.381s8.246-18.381 18.381-18.381 18.381 8.246 18.381 18.381-8.246 18.381-18.381 18.381z"/><path d="m277.413 179.806c-26.677 0-48.381 21.704-48.381 48.381v53.385c0 26.677 21.704 48.381 48.381 48.381 26.678 0 48.381-21.704 48.381-48.381v-53.385c0-26.677-21.703-48.381-48.381-48.381zm18.381 101.766c0 10.135-8.246 18.381-18.381 18.381s-18.381-8.246-18.381-18.381v-53.385c0-10.136 8.246-18.381 18.381-18.381 10.136 0 18.381 8.246 18.381 18.381z"/><path d="m403.56 179.806c-26.678 0-48.381 21.704-48.381 48.381v53.385c0 26.677 21.704 48.381 48.381 48.381s48.381-21.704 48.381-48.381v-53.385c0-26.677-21.704-48.381-48.381-48.381zm18.381 101.766c0 10.135-8.246 18.381-18.381 18.381s-18.381-8.246-18.381-18.381v-53.385c0-10.136 8.246-18.381 18.381-18.381s18.381 8.246 18.381 18.381z"/><circle cx="183.506" cy="220.585" r="15"/><circle cx="183.506" cy="289.174" r="15"/></g></svg>
        </div>

      </div>
      {counter%2===0 && <div><ClockAnalog /></div>}
      {counter%2===1 && <div><ClockDigital/> </div>}
    </div>
  );
}

export default App;
