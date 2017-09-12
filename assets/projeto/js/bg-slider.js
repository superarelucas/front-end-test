function bgslider(classe){
    var teste = document.getElementById(classe);
    var teste2 = document.getElementById('bg-slider');
    switch (classe) {
        case "slide-01":
            teste2.classList.remove("slide-02");
            teste2.classList.remove("slide-03");
            teste2.classList.add(classe);
            teste.classList.add("active");
            document.getElementById("slide-02").classList.remove("active");
            document.getElementById("slide-03").classList.remove("active");
            
            break;
        case "slide-02":
            teste2.classList.remove("slide-01");
            teste2.classList.remove("slide-03");
            teste2.classList.add(classe);
            teste.classList.add("active");
            document.getElementById("slide-01").classList.remove("active");
            document.getElementById("slide-03").classList.remove("active");
            break;
        case "slide-03":
        teste2.classList.remove("slide-01");
        teste2.classList.remove("slide-02");
        teste2.classList.add(classe);
        teste.classList.add("active");
        document.getElementById("slide-01").classList.remove("active");
        document.getElementById("slide-02").classList.remove("active");
        break;
}}