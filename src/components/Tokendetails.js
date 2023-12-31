export default function Tokendetails(){
    return(
        <div id="tokendatails" class="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-[38px] w-full" style={{fontFamily:"Poppins"}}>
        <div class="h-px bg-zinc-800"></div>
        <div class="hidden sm:block">
            <box class="bg-[#2B2E34] border w-[45vw] border-yellow-400 text-left p-2 sm:p-2 md:p-5 items-center flex flex-col text-white min-h-[320px]">
                <div class="flex flex-row bg-[#212429] justify-between w-[100%]" style={{fontWeight:"600", fontSize:"14px"}}>
                    <p class="p-2 w-[30%]">
                        Token Name
                    </p>
                    <p class="p-2 w-[30%]">
                        PRESALE TYPE
                    </p>
                    <p class="p-2 w-[30%]">
                        BLOCKCHAIN
                    </p>
                </div>
                <div class="flex flex-row justify-between w-[100%]" style={{fontWeight:"400", fontSize:"16px"}}>
                    <p class="p-2 w-[30%]">
                        Bully
                    </p>
                    <p class="p-2 w-[30%]">
                        FAIRLAUNCH
                    </p>
                    <p class="p-2 w-[30%]">
                        SOLANA
                    </p>
                </div>
                <div class="flex flex-col w-[100%] mt-5 mb-5">
                    <p class="p-2 w-full bg-[#212429]" style={{fontWeight:"600", fontSize:"14px"}}>Token Symbol</p>
                    <p class="p-2 w-full" style={{fontWeight:"400", fontSize:"16px"}}>BULLY</p>
                </div>
                <div class="w-full flex flex-col gap-3">
                    <div class="h-px bg-stone-300"></div>
                    <div>
                        <p style={{fontSize:"16px", fontWeight:"600"}}>Token Contract Address</p>
                        <div class="flex flex-row gap-5">
                            <p style={{fontSize:"14px", fontWeight:"400", color:"#FFC300"}}>0x37803ecdcb.........0DbA4d7291f19A7</p>
                            <img loading="lazy" src="assets/icons/copy.svg"></img>
                        </div>
                    </div>
                </div>
            </box>
        </div>
        <box class="bg-[#2B2E34] border w-[30vw] min-w-[254px] border-yellow-400 text-left p-2 sm:p-2 md:p-5 items-center flex flex-col text-white min-h-[279px] sm:min-h-[279px] md:min-h-[320px]">
            <p class="p-2 w-full bg-[#212429]" style={{fontWeight:"600", fontSize:"14px"}}>TOTAL SUPPLY</p>
            <p class="p-2 w-full" style={{fontWeight:"400", fontSize:"16px"}}>BULLY SUPPLY</p>
            <p class="p-2 w-full" style={{fontWeight:"400", fontSize:"15px"}}>1,000,000,000</p>
            <p class="p-2 w-full bg-[#212429]" style={{fontWeight:"600", fontSize:"14px"}}>PRESALE / FAIRLAUNCH PRICE</p>
            <p class="p-2 w-full" style={{fontWeight:"400", fontSize:"15px"}}>AMOUNT OF SOL RAISED / 350,000,000 $BULLY</p>
        </box>
        <div class="md:hidden sm:block">
            <div class="w-[30vw] min-w-[254px] flex flex-col gap-3">
                <div class="h-px bg-stone-300"></div>
                <div>
                    <p style={{fontSize:"16px", fontWeight:"600"}}>Token Contract Address</p>
                    <div class="flex flex-row gap-5">
                        <p style={{fontSize:"14px", fontWeight:"400", color:"#FFC300"}}>0x37803ecdcb.........0DbA4d7291f19A7</p>
                        <img loading="lazy" src="assets/icons/copy.svg"></img>
                    </div>
                </div>
            </div>
            <box class="bg-[#2B2E34] border w-[30vw] min-w-[254px] border-yellow-400 text-left p-2 sm:p-2 md:p-5 items-center flex flex-col text-white mt-8">
                <p class="p-2 w-full bg-[#212429]" style={{fontWeight:"600", fontSize:"14px"}}>Token Symbol</p>
                <p class="p-2 w-full" style={{fontWeight:"400", fontSize:"16px"}}>BULLY</p>
            </box>
        </div>
      </div>
    )
}