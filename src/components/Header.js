import React, { useState, useEffect } from 'react';
export default function Header(){
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
        <header class="">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <div class='w-full'>
            <div class="hidden sm:block">
                <div class='cooldown h-[6vw] flex flex-row w-full'>
                    <p class='launchtime text-[#001D3D]'>Time Until Launch</p>
                    <div class="timer w-[304px]">
                        <box class="timerbox w-[67px]">
                            <span class="days">{days}</span> d
                        </box>
                        <box className="timerbox w-[67px]">
                            <span class="hours">{hours}</span> h
                        </box>
                        <box className="timerbox w-[67px]">
                            <span class="minutes">{mins}</span> m
                        </box>
                        <box className="timerbox w-[67px]">
                            <span class="seconds">{secs}</span> s
                        </box>
                    </div>
                    <a class='btn ml-10' href="https://t.me/bullypad_sol" target="_blank">
                        <p>JOIN THE $BULLY COMMUNITY</p>
                    </a>
                </div>
            </div>
            <div class='flex flex-col sm:flex-col md:flex-row justify-center sm:justify-center md:justify-between'>
                <div class='logo flex mt-3 md:mt-[53px] justify-center sm:justify-center md:justify-start sm:mt-[20px]'>
                    <img src="assets/logo.svg" style={{width: "125px", height: "115px"}} alt=""/>
                    <p>BULLYPAD.IO</p>
                </div>
                <div class='items-center font-["Poppins"] flex flex-row justify-center text-[#FFFFFF] text-sm sm:text-sm md:text-xl' style={{fontWeight:"500px"}}>
                <a class="p-3" href="#about">
                    What is BULLY?
                </a>
                <a class="p-3 hidden sm:block" href="#roadmap">
                    Growth Potential
                </a>
                <a class="p-3 hidden sm:block" href="#">
                    Whitepaper
                </a>
                <a class="p-3" href="#economics">
                    Tokenomics
                </a>
                <a class="p-3 hidden sm:block" href="#utility">
                    How to Buy
                </a>
                <div class="p-2 flex bg-[#FFC300] space-x-3 rounded">
                    {/* <img src="assets/wallet.png" class="">
                    </img> */}
                    <a href="https://zealy.io/c/bullypad" target="_blank">
                        <p>GET AIRDROP</p>
                    </a>
                </div>
                </div>

                <div class="hidden sm:block">
                    <div class='flex items-center p-2 h-full'>
                        <a href="https://t.me/bullypad_sol" target="_blank">
                            <img src="assets/telegram.png" class="w-[100px] h-[107px] p-1" alt=""></img>
                        </a>
                        <a href="https://twitter.com/bullysolana" target="_blank">
                        <img src="assets/twitter.png" class="w-[100px] h-[107px] p-1" alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
}