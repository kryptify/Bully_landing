export default function Header(){
    return(
        <header class="">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <div class='w-full'>
            <div class="hidden sm:block">
                <div class='cooldown h-[6vw] flex flex-row w-full'>
                    <p class='launchtime text-[#001D3D]'>Time Until Launch</p>
                    <div class="timer w-[304px]">
                        <box class="timerbox w-[67px]">
                            <span class="days">0</span> d
                        </box>
                        <box className="timerbox w-[67px]">
                            <span class="hours">0</span> h
                        </box>
                        <box className="timerbox w-[67px]">
                            <span class="minutes">0</span> m
                        </box>
                        <box className="timerbox w-[67px]">
                            <span class="seconds">0</span> s
                        </box>
                    </div>
                    <button class='btn ml-10'>
                    <p>JOIN THE $BULLY COMMUNITY</p>
                    </button>
                </div>
            </div>
            <div class='flex flex-col sm:flex-col md:flex-row justify-center sm:justify-center md:justify-between'>
                <div class='logo flex mt-3 md:mt-[53px] justify-center sm:justify-center md:justify-start sm:mt-[20px]'>
                    <img src="assets/logo.svg" style={{width: "125px", height: "115px"}} alt=""/>
                    <p>BULLYPAD.IO</p>
                </div>
                <div class='items-center font-["Poppins"] flex flex-row justify-center text-[#FFFFFF] text-sm sm:text-sm md:text-xl' style={{fontWeight:"500px"}}>
                <button class="p-3">
                    What is BULLY?
                </button>
                <button class="p-3 hidden sm:block">
                    Growth Potential
                </button>
                <button class="p-3 hidden sm:block">
                    Whitepaper
                </button>
                <button class="p-3">
                    Tokenomics
                </button>
                <button class="p-3 hidden sm:block">
                    How to Buy
                </button>
                <div class="p-2 flex bg-[#FFC300] space-x-3 rounded">
                    {/* <img src="assets/wallet.png" class="">
                    </img> */}
                    <a href="https://zealy.io/c/bullypad">
                        <p>GET AIRDROP</p>
                    </a>
                </div>
                </div>

                <div class="hidden sm:block">
                    <div class='flex items-center p-2 h-full'>
                        <a href="https://t.me/bullypad_sol">
                            <img src="assets/telegram.png" class="w-[100px] h-[107px] p-1" alt=""></img>
                        </a>
                        <a href="https://twitter.com/bullysolana">
                        <img src="assets/twitter.png" class="w-[100px] h-[107px] p-1" alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
}