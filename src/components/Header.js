export default function Header(){
    return(
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
    )
}