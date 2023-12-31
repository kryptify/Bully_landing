export default function Economics(){
    return(
        <div id="economics" class="items-center justify-center flex-row text-[#FFFFFF] mt-[18vw]">
            <p class="uppercase text-[13vw]" style={{fontFamily:"Bebas Neue",fontWeight:"400", letterSpacing:"0em"}}>Token Economics</p>
            <box class="absolute flex flex-col sm:flex-col md:flex-row justify-between p-5 w-full h-[70vw] sm:h-[70vw] md:h-[18vw]">
                <div class="flex justify-center items-center sm:items-center md:items-end md:h-full text-left">
                    <div>
                        <p class="uppercase text-[4.5vw]" style={{fontFamily:"Poppins",fontWeight:"700"}}>35% Presale</p>
                        <p class="text-[3vw]" style={{fontFamily:"Poppins",fontWeight:"400"}}>Sold during Fair Launch</p>
                    </div>
                </div>
                <div class="justify-center items-center sm:items-center md:items-start flex md:h-full text-left">
                    <div>
                    <p class="uppercase text-[4.5vw]" style={{fontFamily:"Poppins",fontWeight:"700"}}>35% Operations</p>
                    <p class="text-[3vw]" style={{fontFamily:"Poppins",fontWeight:"400"}}>Locked for 6 Months</p>
                    </div>
                </div>
            </box>

            <div class="justify-center flex-row items-center w-full mb-[10vw]">
            <div class="flex justify-center items-center mt-[13vw] flex-row sm:flex-row md:flex-col">
                <img class="w-[40%]" src='assets/economics.png'/>
                <div>
                    <p class="uppercase text-[4.5vw]" style={{fontFamily:"Poppins",fontWeight:"700", lineHeight:"4.5vw"}}>35%LP</p>
                    <p class="text-[3vw]" style={{fontFamily:"Poppins",fontWeight:"400", lineHeight:"3vw"}}>Added to LP</p>

                </div>
            </div>
            </div>
        </div>
    )
}