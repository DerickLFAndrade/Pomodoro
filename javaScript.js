function inicio () {
    const bot = document.querySelector('[data-bot-ini]')
    const audio = document.querySelector('[data-audio]')
    audio.style.display = 'none'
    bot.addEventListener('click', () => {
        bot.disabled = true;
        pomodoro();
    })
const pomodoro = () => {
    const audio = document.querySelector('[data-audio]')
    let minutos = document.querySelector('[data-minutos]')
    let segundos = document.querySelector('[data-segundos]')
   
    let min = 24;
    let seg = 50;
    minutos.innerHTML = min;
    setInterval(() => {
        if(seg == 59 && min < 25) {
            min++
            minutos.innerHTML = min;
        }

        if(min === 25) {
            audio.play();
            bot.disabled = false;
        } 
    }, 1000);

    setInterval(() => {
        
        if(seg < 59) {
            seg++
            segundos.innerHTML = seg;
        } else {
            segundos.innerHTML = '0'
            seg = 0 ;
        }
        
    },1000);
    
    
}

}
inicio();