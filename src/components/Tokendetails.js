export default function Tokendetails(){
    return(
        <div id="tokendatails" class="w-[1920px] h-[485px] flex-col justify-start items-center gap-[38px] inline-flex">
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
    )
}