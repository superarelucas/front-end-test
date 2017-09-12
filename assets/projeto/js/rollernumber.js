function roller(elemento,limit){
    var element = document.getElementById(elemento);
    var number = 0;
    var counter = 0;

    var speed;//Quanto menor, mais rapido
    if(Number(limit) > 1000){
        speed = 100;
    }else if(Number(limit) > 300){
        speed = 10;
    }
    else if(Number(limit) > 100){
        speed = 2;
    }else{
        speed = 1; 
    }

    var looper = setInterval(function(){
            number = number + speed;
            
            element.innerHTML = number;
            if (number >= Number(limit))
                {
                    clearInterval(looper);
                }
           
        }, 30)
    

}

roller('fun-hour','3200');
roller('fun-satis','120');
roller('fun-project','360');
roller('fun-awards','42');