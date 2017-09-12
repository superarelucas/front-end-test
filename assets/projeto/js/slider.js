
function changeslide(classe){
    
    var teste = document.getElementById(classe);
    var teste2 = document.getElementsByClassName(classe);
    switch (classe) {
        case "features-slide-01":
            teste.classList.add("active");
            teste2[0].classList.add("active");
            document.getElementById("features-slide-02").classList.remove("active");
            document.getElementsByClassName("features-slide-02")[0].classList.remove("active");
            document.getElementById("features-slide-03").classList.remove("active");
            document.getElementsByClassName("features-slide-03")[0].classList.remove("active");
            break;
        case "features-slide-02":
            teste.classList.add("active");
            teste2[0].classList.add("active");
            document.getElementById("features-slide-01").classList.remove("active");
            document.getElementsByClassName("features-slide-01")[0].classList.remove("active");
            document.getElementById("features-slide-03").classList.remove("active");
            document.getElementsByClassName("features-slide-03")[0].classList.remove("active");
            break;
        case "features-slide-03":
            teste.classList.add("active");
            teste2[0].classList.add("active");
            document.getElementById("features-slide-02").classList.remove("active");
            document.getElementsByClassName("features-slide-02")[0].classList.remove("active");
            document.getElementById("features-slide-01").classList.remove("active");
            document.getElementsByClassName("features-slide-01")[0].classList.remove("active");
            break;
        case "team-slide-01":
            console.log(teste);
            teste.classList.add("active");
            console.log(teste2[0]);
            teste2[0].classList.add("active");
            document.getElementById("team-slide-02").classList.remove("active");
            document.getElementsByClassName("team-slide-02")[0].classList.remove("active");
            document.getElementById("team-slide-03").classList.remove("active");
            document.getElementsByClassName("team-slide-03")[0].classList.remove("active");
            break;
        case "team-slide-02":
            console.log(teste);
            teste.classList.add("active");
            console.log(teste2[0]);
            teste2[0].classList.add("active");
            document.getElementById("team-slide-01").classList.remove("active");
            document.getElementsByClassName("team-slide-01")[0].classList.remove("active");
            document.getElementById("team-slide-03").classList.remove("active");
            document.getElementsByClassName("team-slide-03")[0].classList.remove("active");
            break;
        case "team-slide-03":
            console.log(teste);
            teste.classList.add("active");
            console.log(teste2[0]);
            teste2[0].classList.add("active");
            document.getElementById("team-slide-02").classList.remove("active");
            document.getElementsByClassName("team-slide-02")[0].classList.remove("active");
            document.getElementById("team-slide-01").classList.remove("active");
            document.getElementsByClassName("team-slide-01")[0].classList.remove("active");
            break;
        }
}

