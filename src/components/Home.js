export default function Home(){
    return(
        <div id="home">
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
    )
}