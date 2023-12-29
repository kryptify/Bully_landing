import './App.css';

function App() {
  return (
    <div className="App">
      {/* <img class="absolute w-full -z-10" src='assets/background.png'/> */}
      <header class="">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <div class='w-full'>
          <div class='cooldown'>
            <p class='launchtime'>Time Until Launch</p>
            <div class="timer">
                <box class="timerbox">
                    <span class="days">0</span> d
                </box>
                <box className="timerbox">
                    <span class="hours">0</span> h
                </box>
                <box className="timerbox">
                    <span class="minutes">0</span> m
                </box>
                <box className="timerbox">
                    <span class="seconds">0</span> s
                </box>
            </div>
            <button class='btn'>
              <p>JOIN THE $BULLY COMMUNITY</p>
            </button>
          </div>
          <div class='navbar'>
            <div class='logo'>
              <img src="assets/logo.svg" style={{width: "125px", height: "115px"}} />
              <p>BULLYPAD.IO</p>
            </div>
            <div class='menu w-3/4'>
              <button class="p-3">
                What is BULLY?
              </button>
              <button class="p-3">
                Growth Potential
              </button>
              <button class="p-3">
                Whitepaper
              </button>
              <button class="p-3">
                Tokenomics
              </button>
              <button class="p-3">
                How to Buy
              </button>
              <button class="p-3">
                What is BULLY?
              </button>
            </div>

            <div class='social items-center text-center p-2'>
              <button>
                <img src="assets/telegram.png" class="w-100px h-107px p-1"></img>
              </button>
              <button>
              <img src="assets/twitter.png" class="w-100px h-107px p-1"></img>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div>
        
        <div class="absolute flex flex-col justify-between w-full mt-1 h-[150vw]">
          <p class="areyou p-2 flex-1">
            Are You <br/> <span class="text-[#FFD60A]">Looking </span> For
          </p>
          <div class="flex-grow-2">
          </div>
          {/* <img class="w-[1693px] h-[1411px] left-[205px] top-[2082px] related -z-10" src="assets/cloud.png" /> */}
          <div class="text-left transform -translate-y-1/3" style={{fontSize:"250px", color:"#FFFFFF", fontFamily:"Bebas Neue", marginLeft:'10vw', lineHeight:'240px'}}>
            <p class="p-2">THE NEXT</p>
            <p class="pump">PUMP?</p>
          </div>
          {/* <img class="w-[1693px] h-[1411px] left-0 top-[-38px] related -z-10" src="assets/cloud.png" /> */}
        </div>
        <img src='assets/dog.svg' class='w-full h-full'></img>
        {/* <img class="w-[1773px] h-[2047px] left-[364px] shadow border-zinc-500" src="assets/background.png" /> */}
      </div>
      
      <div>
        <p class="text-left p-2 text-[#FFFFFF]" style={{fontSize:"250px",fontFamily:"Bebas Neue" , marginLeft:'10vw', lineHeight:'240px'}}>BULLYPAD.IO</p>
        <p class="description p-2 text-left">
        DO YOU MISS ON SOLANA A DOPE TOKEN <br/>
        LAUNCHPAD? YEAH WE GOT YOU. <br/>
        HERE IS THE SOLUTION. WE ARE IN THE <br/>
        SPACE SINCE 2015 AND KNOW WHAT A <br/> GOOD LAUNCHPAD NEEDS
        </p>
      </div>
      <div class="mb-15" style={{padding:"3vw", marginTop:"10vw", marginBottom:"12vw"}}>
        <p class="title text-left p-2 mt-15">
          community
        </p>
        <p class="title text-right p-2 mt-10">
          ecosystem
        </p>
        <p class="title text-left p-2 mt-10">
          no gatekeeping
        </p>
        <p class="title text-right p-2 mt-10">
          easy to use
        </p>
      </div>
      <div class="flex w-full justify-center">
        <div class='flex flex-col p-3 mt-3 w-full absolute'>
          <img src="assets/1.png" class="flex-1 " style={{width:"289px", height:"327px"}}/>
          <div class='items-left flex-1 w-full'>
              <div>
                <p>THE CONCEPTION</p>
              </div>
          </div>
          <div class='items-right flex-2 w-full'>
            {/* <img src="assets/2.png" style={{width:"289px", height:"327px"}}/> */}
              <div>
                <p>THE CONCEPTION</p>
              </div>
          </div>
        </div>
        <img src="assets/vector.png"/>
      </div>
      <div class="items-center justify-center flex-row text-[#FFFFFF]">
        <p class="uppercase text-[250px]" style={{fontFamily:"Bebas Neue",fontWeight:"400", letterSpacing:"0em"}}>Token Economics</p>
        <box class="absolute flex justify-between p-5 w-full h-[18vw]">
          <div clas="flex items-end h-full">
            <div>
              <p class="uppercase text-[80px]" style={{fontFamily:"Poppins",fontWeight:"700"}}>35% Presale</p>
              <p class="text-[50px]" style={{fontFamily:"Poppins",fontWeight:"400"}}>Sold during Fair Launch</p>
            </div>
          </div>
          <div class="items-start flex h-full">
            <div>
              <p class="uppercase text-[80px]" style={{fontFamily:"Poppins",fontWeight:"700"}}>35% Operations</p>
              <p class="text-[50px]" style={{fontFamily:"Poppins",fontWeight:"400"}}>Locked for 6 Months</p>
            </div>
          </div>
          
        </box>

        <div class="justify-center flex-row items-center w-full mb-[10vw]">
          <div class="flex justify-center">
            <img class="" src='assets/economics.png'/>
          </div>
          <p class="uppercase text-[80px]" style={{fontFamily:"Poppins",fontWeight:"700", lineHeight:"80px"}}>35%LP</p>
          <p class="text-[50px]" style={{fontFamily:"Poppins",fontWeight:"400", lineHeight:"50px"}}>Added to LP</p>
        </div>
      </div>
      <div class="w-[1920px] h-[485px] flex-col justify-start items-center gap-[38px] inline-flex">
        <div class="self-stretch h-24 flex-col justify-center items-start gap-[50px] flex">
          <div class="self-stretch h-px bg-zinc-800"></div>
          <div class="flex-col justify-center items-center inline-flex w-full">
            <div class="text-white text-[32px] font-semibold font-['Poppins'] uppercase leading-[45px]">Token DETAILS</div>
          </div>
        </div>
        <div class="justify-start items-start gap-5 inline-flex">
          <div class="w-[794px] px-4 py-[15px] bg-zinc-800 border border-yellow-400 flex-col justify-start items-start gap-[30px] inline-flex">
            <div class="self-stretch h-[62.50px] flex-col justify-start items-start gap-[9px] flex">
              <div class="self-stretch px-[7px] py-[5px] bg-neutral-800 justify-start items-start gap-[154px] inline-flex">
                <div class="w-[89.86px] h-[21px] text-white text-sm font-semibold font-['Poppins'] leading-[21px]">Token Name</div>
                <div class="w-[122.27px] h-[21px] text-white text-sm font-semibold font-['Poppins'] leading-[21px]">PRESALE TYPE</div>
                <div class="w-[145px] h-[21px] text-white text-sm font-semibold font-['Poppins'] leading-[21px]">BLOCKCHAIN</div>
              </div>
              <div class="pl-[7px] justify-start items-start gap-[121px] inline-flex">
                <div class="w-[122.98px] h-[22.50px] text-white text-[15px] font-normal font-['Poppins'] leading-snug">BULLY</div>
                <div class="w-[157px] h-[22px] text-white text-[15px] font-normal font-['Poppins'] leading-snug">FAIRLAUNCH</div>
                <div class="w-[177px] h-[21px] text-white text-[15px] font-normal font-['Poppins'] leading-snug">SOLANA</div>
              </div>
            </div>
            <div class="self-stretch h-[61.50px] flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch px-[7px] py-[5px] bg-neutral-800 justify-start items-start gap-[154px] inline-flex">
                <div class="text-white text-sm font-semibold font-['Poppins'] leading-[21px]">Token Symbol</div>
              </div>
              <div class="w-[281px] pl-2 justify-start items-start gap-2.5 inline-flex">
                <div class="w-[50.33px] h-[22.50px] text-white text-[15px] font-normal font-['Poppins'] leading-snug">BULLY</div>
              </div>
            </div>
            <div class="self-stretch h-[65px] flex-col justify-start items-start gap-3.5 flex">
              <div class="self-stretch h-px bg-stone-300"></div>
              <div class="flex-col justify-start items-start gap-0.5 flex">
                <div class="w-[196.57px] h-6 text-white text-base font-semibold font-['Poppins'] leading-normal">Token Contract Address</div>
                <div class="justify-start items-center gap-2 inline-flex">
                  <div class="w-[266.21px] h-[22.50px] text-yellow-400 text-sm font-normal font-['Poppins'] leading-snug">0x37803ecdcb.........0DbA4d7291f19A7</div>
                  <div class="w-6 h-6 relative"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[486px] h-[279px] px-4 py-[15px] bg-zinc-800 border border-yellow-400 flex-col justify-start items-start gap-[15px] inline-flex">
            <div class="self-stretch h-[95.50px] flex-col justify-start items-start gap-[9px] flex">
              <div class="self-stretch px-[7px] py-[5px] bg-neutral-800 justify-start items-start gap-[154px] inline-flex">
                <div class="text-white text-sm font-semibold font-['Poppins'] leading-[21px]">TOTAL SUPPLY</div>
              </div>
              <div class="w-[248.78px] h-6 text-white text-base font-semibold font-['Poppins'] leading-normal">BULLY SUPPLY</div>
              <div class="w-[145.09px] h-[22.50px] text-white text-[15px] font-normal font-['Poppins'] leading-snug">1,000,000,000</div>
            </div>
            <div class="self-stretch h-[62px] flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch px-[7px] py-[5px] bg-neutral-800 justify-start items-start gap-[154px] inline-flex">
                <div class="text-white text-sm font-semibold font-['Poppins'] leading-[21px]">PRESALE / FAIRLAUNCH PRICE</div>
              </div>
              <div class="w-[281px] pl-2 justify-start items-start gap-2.5 inline-flex">
                <div class="text-white text-[15px] font-normal font-['Poppins'] leading-snug">AMOUNT OF SOL RAISED / 350,000,000 $BULLY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>   
      {/* <img class="w-[289px] h-[327px] left-[86px] top-[5691px] absolute" src="assets/1.png" />
      <img class="w-56 h-[269px] left-[1547px] top-[6594px] absolute" src="assets/2.png" />
      <img class="w-[251px] h-[286px] left-[94px] top-[7832px] absolute" src="assets/3.png" />
      <img class="w-[321px] h-[298px] left-[1508px] top-[8825px] absolute" src="assets/4.png" /> */}
    </div>
  );
}

export default App;
