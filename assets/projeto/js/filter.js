
function filter(classe){
    const categorias = ['All','Branding','Web','Logo','Photography'];
    var categoriasMutaveis = categorias;
    var search_term = classe;
    console.log(categoriasMutaveis);
    
    if(classe==="All"){
        for (all=0; all < categoriasMutaveis.length; all++) {
            var efeitoall = document.getElementsByClassName(categoriasMutaveis[all]);
            for(all2=0; all2 < efeitoall.length; all2++){//Aplicando o Efeito ALL em todos os elementos
                efeitoall[all2].style.transform = "scale(1)";
                efeitoall[all2].style.filter = "grayscale(0%)";
            }
        }
    }
    else{
        for (i=0; i < categoriasMutaveis.length; i++) { //Buscando e removendo termo
            console.log(categoriasMutaveis[i]);

            if(categoriasMutaveis[i]===classe){
                var efeitoup = document.getElementsByClassName(categoriasMutaveis[i]);
                for(ii=0; ii < efeitoup.length; ii++){//Aplicando o Efeito UP nos elementos do termo
                    efeitoup[ii].style.transform = "scale(1.05)";
                    efeitoup[ii].style.filter = "grayscale(0%)";
                }
                console.log(i);
                categoriasMutaveis.splice(i,1);
                console.log(categoriasMutaveis);
            }
        }
        for(iii=0; iii < categoriasMutaveis.length; iii++){//Buscando o Restante
        var efeitodown = document.getElementsByClassName(categoriasMutaveis[iii]);
        for(iiii=0; iiii < efeitodown.length; iiii++){//Aplicando o Efeito DOWN nos elementos Restantes
            efeitodown[iiii].style.transform = "scale(.5)";
            efeitodown[iiii].style.filter = "grayscale(100%)";
        }
        
        }

    }
}
