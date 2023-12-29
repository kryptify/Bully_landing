export default function Economics(){
    return(
        <div id="economics" class="items-center justify-center flex-row text-[#FFFFFF]">
            <p class="uppercase text-[250px]" style={{fontFamily:"Bebas Neue",fontWeight:"400", letterSpacing:"0em"}}>Token Economics</p>
            <box class="absolute flex justify-between p-5 w-full h-[18vw]">
            <div class="flex items-end h-full">
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
    )
}