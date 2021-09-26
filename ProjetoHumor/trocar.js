var btn = document.getElementById('click');
var img = document.getElementById('troca');
var nm = document.getElementById('nome');
var apr = document.getElementById('aparencia');


btn.onclick = function(){
    if(btn.value === 'Mudar'){        
        img.src = 'Medo.jpg';                
        nm.innerText = "Preocupado";
        apr.innerText = "Com Medo";
        btn.value = "Estou com Medo";


    } else if (btn.value === 'Estou com Medo'){               
        img.src = 'Raiva.jpg';
        nm.innerText = "Nervoso";
        apr.innerText = "Com Raiva";        
        btn.value = 'Estou Com Raiva';

    } else if (btn.value === 'Estou Com Raiva'){
        img.src = 'Tristeza.jpg';        
        nm.innerText = "Desanimado";
        apr.innerText = "Pouco Triste";
        btn.value = "Estou Triste"; 
        
        
    } else if (btn.value === 'Estou Triste'){         
        img.src = 'Nojinho.jpg';              
        nm.innerText = "Enjoo";
        apr.innerText = "Com Nojo";
        btn.value = "Estou com Nojo"; 
        

    } else if (btn.value === 'Estou com Nojo'){
        img.src = 'Alegria.jpg';             
        nm.innerText = "Alegre";
        apr.innerText = "Muito Feliz";
        btn.value = "Estou Alegre"; 
        

    } else if (btn.value === "Estou Alegre") {
        img.src = "Divertidamente.jpg";
        nm.innerText = "HUMOR IDENTIFICADO";
        apr.innerText = "AGRADECIMENTO !";
        btn.innerText = "ATUALIZE A PÁGINA PARA REINICIAR !!";        
      
    } 
       
 
}