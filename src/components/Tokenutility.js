export default function Utility(){
    return(
        <div id="utility" class="flex justify-center mt-20">
            <img src="assets/utility.png" class="w-full hidden sm:block absolute z-10" />
            <div class="text-[#FFFFFF] flex flex-col justify-between p-3 w-[80%] z-20 items-center">
                <div>
                    <p class="uppercase text-[60px] sm:text-[60px] md:text-[15vw] text-left sm:text-left md:text-center" style={{fontFamily:"Bebas Neue", fontWeight:"400", letterSpacing:"0em"}}>
                        THE UTILITY
                    </p>
                    <div class="text-left sm:text-left md:text-right justify-end flex flex-col">
                        <p class="uppercase text-[40px] sm:text-[40px] md:text-[9vw]" style={{fontFamily:"Bebas Neue", fontWeight:"400",  letterSpacing:"0em"}}>ACCESS & EARLY LAUNCHES</p>
                        <p class="text-[20px] sm:text-[20px] md:text-[3.5vw]" style={{fontFamily:"Poppins", fontWeight:"400", letterSpacing:"0em"}}>$BULLY holders access presales and <br/> early launches.</p>
                    </div>
                    <div class="text-left justify-start flex flex-col">
                        <p class="uppercase text-[40px] sm:text-[40px] md:text-[9vw]" style={{fontFamily:"Bebas Neue", fontWeight:"400", letterSpacing:"0em"}}>Fee Discounts</p>
                        <p class="text-[20px] sm:text-[20px] md:text-[3.5vw]" style={{fontFamily:"Poppins", fontWeight:"400", letterSpacing:"0em"}}>Reduced rates when paying fees in <br/> $BULLY.</p>
                    </div>
                    <div class="text-left sm:text-left md:text-right justify-end flex flex-col">
                        <p class="uppercase text-[40px] sm:text-[40px] md:text-[9vw]" style={{fontFamily:"Bebas Neue", fontWeight:"400", letterSpacing:"0em"}}>Auto NFT Whitelisting</p>
                        <p class="text-[20px] sm:text-[20px] md:text-[3.5vw]" style={{fontFamily:"Poppins", fontWeight:"400",  letterSpacing:"0em"}}>Holders get whitelisted for BULLY <br/> NFTs.</p>
                    </div>
                    <div class="text-left justify-start flex flex-col">
                        <p class="uppercase text-[40px] sm:text-[40px] md:text-[9vw]" style={{fontFamily:"Bebas Neue", fontWeight:"400", letterSpacing:"0em"}}>Community Rewards</p>
                        <p class="text-[20px] sm:text-[20px] md:text-[3.5vw]" style={{fontFamily:"Poppins", fontWeight:"400", letterSpacing:"0em"}}>Airdrops & exclusive events for <br/> holders.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}