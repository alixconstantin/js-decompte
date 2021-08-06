// Decompte JS 

let button = document.querySelector('button'); // recupération du bouton par le DOM
let timer = 10; // initialisation de la valeur de la variable timer pour le decompte
let interval; // initialisation de la variable interval, pour l'arrêter

button.addEventListener('click', start); // recupere l'évènement click sur le boutton et lance la fonction start


function start() {

    interval = setInterval(decompte, 1000);  // la fonction start appel la fonction decompte toutes les 1000 millisecondes
}


function decompte() {

timer --;               // timer est décrémenter de 1
if ( timer <= 0 ){      // si timer est inférieur ou égale a 0 : appel la fonction stop
    stop();
}
else {
    document.body.innerHTML += timer + '</br>'; // sinon rajoute dans le html dans body 
}   
}
  
function stop() {                        // fonction stop pour supprimer l'interval de la fonction start
    clearInterval(interval);            
    document.body.innerHTML = 'STOP !';  // rajoute 
}


