<!DOCTYPE html>
<html lang="pr-BT">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <header>
        <nav class="nav-bar">
            <ul class="lista-nav">
                <li class="nav-item">JavaScript</li>
                <li class="nav-item">HTML</li>
                <li class="nav-item">CSS</li>
            </ul>
        </nav>
    </header>
    <div class="container">

        <div class="pomodoro">

            <span class="text-c">

                <section>

                    <span class="minutos" data-minutos>0</span>
                    <span class="min">min</span>
                </section>
                <section>
                    <span class="segundos" data-segundos>0</span>
                    <span class="seg">seg</span>
                </section>
            </span>

            <button class="bot-ini" data-bot-ini>Iniciar</button>
        </div>
        <section class="opções">
           
                <button class="bot-op" data-bot-op1>25min</button>
                <button class="bot-op" data-bot-op2>50min</button>
                <button class="bot-op" data-bot-cust>cust</button>
          
        </section>
        <audio data-audio src="alarme.mp3" controls></audio>
    </div>

    <footer>
        <ul class="footer-b">
            <li class="item-footer">Pomodoro</li>
            
        </ul>
    </footer>


    <script src="javaScript.js"></script>
</body>

</html>