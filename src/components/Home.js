import React, { useState, useEffect } from 'react';

export default function Home(){
    let time = 102060;
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    const cowndown = (distance)=>{
        setDays(Math.floor(distance / 86400));
        setHours(Math.floor((distance % 86400) / 3600));
        setMins(Math.floor((distance % 3600) / 60));
        setSecs(Math.floor(distance % 60));
    }
    useEffect(() => {
        let interval;
    
        interval = setInterval(() => {
        cowndown(time);
        time--;
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    return(
        <div id="home">
            <div class="absolute flex flex-col justify-between w-full mt-1 h-[170vw] md:h-[150vw] sm:h-[170vw]">
            <p class="areyou p-2 flex-1 md:text-left sm:text-center sm:mt-5">
                Are You <br/> <span class="text-[#FFD60A]">Looking </span> For
            </p>
            <div class="flex-grow-2">
            </div>
            <div class="md:text-left sm-text-center transform -translate-y-1/3" style={{fontFamily:"Bebas Neue", marginLeft:'10vw', lineHeight:'14vw'}}>
                <p class="p-2 text-[15vw] text-[#FFFFFF]">THE NEXT</p>
                <p class="text-[#013565] sm:text-[#013565] md:text-[#FFFFFF]" 
                style={{
                    fontFamily:"Bebas Neue", 
                    fontWeight:"400", 
                    fontSize:"35vw", 
                    lineHeight:"25vw", 
                    textShadow: "-5px -5px 0 #FFC329, 5px -5px 0 #FFC329, -5px 5px 0 #FFC329, 5px 5px 0 #FFC329"}}>PUMP?</p>
            </div>
            <div class="md:hidden sm:block">
                <div class="flex justify-center">
                    <div class='flex flex-col w-[50%] text-[#FFD60A] items-center' style={{padding: "8px 0px",gap: "15px"}}>
                        <p class='uppercase' style={{fontSize: "3vw", fontFamily: 'Roboto'}}>Time Until Launch</p>
                        <div class="h-[56px] flex items-center" style={{backgroundColor:"#FFD60A", padding: "20px 20px 20px 20px"}}>
                            <div class="timer flex items-center" >
                                <box class="timerbox w-[50px]">
                                    <span class="days">{days}</span> d
                                </box>
                                <box className="timerbox w-[50px]">
                                    <span class="hours">{hours}</span> h
                                </box>
                                <box className="timerbox w-[50px]">
                                    <span class="minutes">{mins}</span> m
                                </box>
                                <box className="timerbox w-[50px]">
                                    <span class="seconds">{secs}</span> s
                                </box>
                            </div>

                        </div>
                        <button class='btn'>
                        <p>JOIN THE $BULLY COMMUNITY</p>
                        </button>
                    </div>

                </div>

            </div>
            {/* <img class="w-[1693px] h-[1411px] left-0 top-[-38px] related -z-10" src="assets/cloud.png" /> */}
            </div>
            <img src='assets/dog.svg' class='w-full h-full'></img>
            {/* <img class="w-[1773px] h-[2047px] left-[364px] shadow border-zinc-500" src="assets/background.png" /> */}
      </div>
    )
}