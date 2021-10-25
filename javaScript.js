function inicio() {
    const botReset = document.querySelector('[data-bot-reset]')
    const botPad = document.querySelector('[data-bot-op1]');
    const botPomo50 = document.querySelector('[data-bot-op2]')
    const botPomoCust = document.querySelector('[data-bot-cust]')
    const botFk = document.querySelector('[data-bot-fk]')
    const audio = document.querySelector('[data-audio]');
    const botCustPausa = document.querySelector('[data-bot-pausa]')
    audio.style.display = 'none';
    var validador = false;
    
    const pausa5 = document.querySelector('[data-op-n]');
    const pausaM = document.querySelector('[data-op-esc]');


    botReset.addEventListener('click', () => {
        location.reload();
        
    })
   
    botPad.addEventListener('click', () => {
        
        pausa5.innerHTML = 'PADRÃO';
        pausaM.innerHTML = '(25min)';
        botFk.style.display = 'none'
        botPad.style.display = 'none'
        botPomo50.style.display = 'none'
        pomodoroPad();

    })
   

     botPomo50.addEventListener('click', () => {
        
         pausa5.innerHTML = 'PROLONGADO';
         pausaM.innerHTML = '50min';
         botPad.style.display = 'none'
         botPomo50.style.display = 'none'
         botFk.style.display = 'none'
         pomodoro50();
         
     })

    botFk.addEventListener('click', () => {
        botFk.style.display = 'none'
        botPomoCust.style.display = 'block'
        botPomoCust.style.textAlign = 'left'
        botPomoCust.style.textIndent = '10px'
        const botIniciar = document.querySelector('[data-bot-iniciar]')
        
        botCustPausa.style.display = 'block'
        botCustPausa.style.textAlign = 'left'
        botCustPausa.style.textIndent = '10px'
        botIniciar.style.display = 'block'
        botPomoCust.disabled = false
        pausa5.innerHTML = 'CUSTOM';
        pausaM.innerHTML = botPomoCust.value;
        const aviso = document.querySelector('[data-aviso]')
        aviso.style.display = 'block'
        botPad.style.display = 'none'
        botPomo50.style.display = 'none'

        botIniciar.addEventListener('click', () => {
            botPomoCust.style.display = 'none'
            botCustPausa.style.display = 'none'
            botIniciar.style.display = 'none'
            aviso.style.display = 'none'
            if (botPomoCust.value >= 61) {
                botPomoCust.value = 60  
            }
            pomodoroCust();

          
        } )
       
       

       

    })



    const pomodoroPad = () => {
        validador = false
        const audio = document.querySelector('[data-audio]');
        let minutos = document.querySelector('[data-minutos]');
        let segundos = document.querySelector('[data-segundos]');

        let min = 0;
        let seg = 0;
        minutos.innerHTML = min;
        setInterval(() => {
            if (validador == false) {

                if (seg == 59 && min <= 25) {
                    min++;
                    minutos.innerHTML = min;
                } else if (min === 25) {
                    min = 26;
                    seg = 60;
                    segundos.innerHTML = '0';
                    audio.play();
                    const pausa5m = () => {
                        const pausa5 = document.querySelector('[data-op-n]');
                        const pausaM = document.querySelector('[data-op-esc]');
                        pausa5.innerHTML = 'PAUSA';
                        pausaM.innerHTML = '5min';
                        validador = true;
                        minutos.innerHTML = 0;
                        min = 0;
                        seg = 0;

                        //pausa de 5 minutos
                        setInterval(() => {

                            if (validador === true) {
                                if (seg == 59 && min <= 5) {
                                    min++;
                                    minutos.innerHTML = min;
                                } else if (min === 5) {
                                    
                                    
                                    setTimeout(() => {
                                        location.reload();
                                    }, 3000)
                                    pausa5.innerHTML = `Fim do ciclo`;
                                    pausaM.innerHTML = '25/5';
                                    min = 60
                                    seg = 60
                                    segundos.innerHTML = '0';
                                    minutos.innerHTML = '0'
                                    audio.play();
                                    
                                    validador = false 
                                }
                            }
                            //pausa de 5 minutos


                            if (validador === true) {
                              ('pausa5')
                                if (seg < 59) {
                                    seg++;
                                    segundos.innerHTML = seg;
                                } else if (seg == 59) {
                                    segundos.innerHTML = '0';
                                    seg = 0;
                                }
                            }

                        }, 1000)

                    }
                    pausa5m();
                }
                
            }

        }, 1000);


        

        setInterval(() => {
            if (validador === false) {
               
                if (seg < 59) {
                    seg++;
                    segundos.innerHTML = seg;
                } else if (seg == 59) {
                    segundos.innerHTML = '0';
                    seg = 0;
                }
            }

           

        }, 1000)

      
    }

    const pomodoro50 = () => {
        const audio = document.querySelector('[data-audio]');
        let minutos = document.querySelector('[data-minutos]');
        let segundos = document.querySelector('[data-segundos]');

        let min = 0;
        let seg = 0;
        minutos.innerHTML = min;
        setInterval(() => {
            if (validador == false) {

                if (seg == 59 && min <= 50) {
                    min++;
                    minutos.innerHTML = min;
                } else if (min === 50) {
                    min = 26;
                    seg = 60;
                    segundos.innerHTML = '0';
                    audio.play();
                    const pausa10m = () => {
                        const pausa5 = document.querySelector('[data-op-n]');
                        const pausaM = document.querySelector('[data-op-esc]');
                        pausa5.innerHTML = 'PAUSA';
                        pausaM.innerHTML = '10min';
                        validador = true;
                        minutos.innerHTML = 0;

                        min = 0;
                        seg = 0;
                        //pausa 10min
                        setInterval(() => {

                            if (validador === true) {
                                if (seg == 59 && min <= 10) {
                                    min++;
                                    minutos.innerHTML = min;
                                } else if (min === 10) {
                                    pausa5.innerHTML = `Fim do ciclo`;
                                    pausaM.innerHTML = '50/10';
                                    min = 60
                                    seg = 60
                                    segundos.innerHTML = '0';
                                    minutos.innerHTML = '0'
                                    audio.play();
                                    validador = false
                                    setTimeout(() => {
                                        location.reload();
                                    }, 3000)
                                }
                            }
                            //pausa 10min


                            if (validador === true) {
                              
                                if (seg < 59) {
                                    seg++;
                                    segundos.innerHTML = seg;
                                } else if (seg == 59) {
                                    segundos.innerHTML = '0';
                                    seg = 0;
                                }
                            }

                        }, 1000)

                    }
                    pausa10m();
                }
                
            }

        }, 1000);


        

        setInterval(() => {
            if (validador === false) {
               
                if (seg < 59) {
                    seg++;
                    segundos.innerHTML = seg;
                } else if (seg == 59) {
                    segundos.innerHTML = '0';
                    seg = 0;
                }
            }

        }, 1000)


    }


    const pomodoroCust = () => {
        const audio = document.querySelector('[data-audio]');
        let minutos = document.querySelector('[data-minutos]');
        let segundos = document.querySelector('[data-segundos]');
        const armazenaMin = Number(botPomoCust.value)
        const armazenaPausa = Number(botCustPausa.value)
       
        let min = 0;
        let seg = 0;
        minutos.innerHTML = min;

        setInterval(() => {
            if (validador == false) {
               
                if (seg == 59 && min <= armazenaMin) {
                    min++;
                    minutos.innerHTML = min;
                } else if (min === armazenaMin) {
                    min = 26;
                    seg = 60;
                    segundos.innerHTML = '0';
                    audio.play();
                    const pausaCust = () => {
                        const pausa5 = document.querySelector('[data-op-n]');
                        const pausaM = document.querySelector('[data-op-esc]');
                        pausa5.innerHTML = 'PAUSA';
                        pausaM.innerHTML = `${armazenaPausa} min`;
                        validador = true;
                        minutos.innerHTML = 0;

                        min = 0;
                        seg = 0;
                        //pausa custom
                        setInterval(() => {
                                
                            if (validador === true) {
                                
                                if (seg == 59 && min <= armazenaPausa) {
                                  
                                    min++;
                                    minutos.innerHTML = min;
                                } else if (min === armazenaPausa) {
                                    pausa5.innerHTML = `Fim do ciclo` ;
                                    pausaM.innerHTML = `${armazenaMin}/${armazenaPausa}`
                                    min = 60
                                    seg = 60
                                    segundos.innerHTML = '0';
                                    minutos.innerHTML = '0'
                                    audio.play();
                                    validador = false
                                    setTimeout(() => {
                                        location.reload();
                                    }, 3000)
                                }
                            }
                            //pausa 10min


                            if (validador === true) {
                                
                                if (seg < 59) {
                                    seg++;
                                    segundos.innerHTML = seg;
                                } else if (seg == 59) {
                                    segundos.innerHTML = '0';
                                    seg = 0;
                                }
                            }

                        }, 1000)

                    }
                    pausaCust();
                }
                
            }

        }, 1000);


        

        setInterval(() => {
            if (validador === false) {
            
                if (seg < 59) {
                    seg++;
                    segundos.innerHTML = seg;
                } else if (seg == 59) {
                    segundos.innerHTML = '0';
                    seg = 0;
                }
            }

        }, 1000)


    }


  
   

}
inicio();