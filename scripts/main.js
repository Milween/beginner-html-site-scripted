// Suivi des explications de JS sur MDN dev : https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

// L'instruction 'return' indique au navigateur qu'il faut renvoyer la variable 'result' en dehors de la fonction afin qu'elle puisse être réutilisée par ailleurs. Cette instruction est nécessaire car les variables définies à l'intérieur des fonctions sont uniquement disponibles à l'intérieur de ces fonctions. C'est ce que l'on appelle une portée.

// Evènements : Les évènements sont des structures de code qui 'écoutent' ce qui se passe dans le navigateur et déclenchent du code en réponse. L'un des meilleurs exemple est l'évènement 'cliquez'.

// Ajout d'un changeur d'image :

  // En utilisant qqs fonctionnalités de l'API DOM et un peu de JS.
  // pour alterner entre les deux images lorsqu'on clique sur l'image affichée.


// On déclare la fonction myImage : Sélectionne Img dans le DOM.
let myImage = document.querySelector('img');

// On écoute l'évènement CLIQUE sur 'myImage' et lors de cette évènement appliquer la fonction 'clikableImage'.
myImage.addEventListener('click', clikableImage);

// Déclaration de la fonction clikableImage sous forme conditionnelle.
function clikableImage() {
  
  // On déclare la variable 'mySrc' = récupère la valeur de l'attribut 'src' de l'image.
  let mySrc = myImage.getAttribute('src');

  // Si mySrc est égale en type et valeur à l'icône firefox.
  if (mySrc === 'images/firefox-icon.png') {
  // Alors myImage change de source et prendre la source du logo de Chrome.
    myImage.setAttribute('src', 'images/Google_Chrome_icon-icons.com_66794.png');
  } else {
    // Sinon myImage prend la Src de l'icône firefox.
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

/* Ajoutons un message d'accueil personnalisé :

Ce Message d'accueil sera conservé quand l'utilisateur quittera le site et s'il revient - nous le sauvegarderons avec l'API Web Storage.
Nous ajouterons également une option pour pouvoir changer l'utilisateur et le message d'accueil.
*/ 

// 1. Ajout d'un bouton 'changer d'utilisateur' dans index.html avant script.

// 2. Dans main.js, déclarons des variables faisant référence à notre button et à notre titre h1.

const myButton = document.querySelector('button');

// 3. Ajoutons les fonctionnalités (fonction) pour avoir ce message d'accueil.

function setUserName() {
  
  /* On déclare myName avec la fonction 'prompt' : qui permet d'afficher une boîte de dialogue (un peu comme alert() sauf qu'elle permet à l'utilisateur de saisir des données et de les enregistrer dans une variable quand on clique sur OK.) */
  let myName = prompt('Veuillez saisir votre nom');

  /* Une proprièté d'API appelée 'localStorage' : permet de stocker des données de navigation pour les réutiliser. */ 

  /* La fonction setItem() : pour stocker la donnée qui nous intéresse dans un conteneur appelé 'nom'.

  La valeur stockée ici, est la valeur de la variable myName qui contient le nom saisie par notre utilisateur. */

  localStorage.setItem('nom', myName);

  /* On utilise la proprièté 'textContent' du titre (variable myHeading) pour lui affecter un nouveau contenu. */ 
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}

// 4. Ajoutons un bloc conditionnel 'if..else' : l'étape d'initiation car il sera la première fois que la page est chargée par l'utilisateur.

// Si le navigateur ne possède pas de 'nom' enregistrée,...
if (!localStorage.getItem('nom')) {
  
  // utiliser la fonction setUserName() pour déclarer un nom...
  setUserName();
  
  // Sinon, Si le navigateur possède un 'nom' enregistré...
} else {
    
  // On le récupère dans la variable 'storeName'...
    let storedName = localStorage.getItem('nom');
    
    // Et on lui demande de l'afficher dans la variable 'myHeading'.
    myHeading.textContent = 'Mozilla est cool ' + storedName;
}

// On écoute l'évènement sur notre button 'click', dans le cas d'un click lancer la fonction setUserName() déclaré plus haut. 
// Le bouton permet à l'utilisateur de modifier la valeur de 'nom' s'il le souhaite.
myButton.addEventListener('click', function() {
  setUserName();
});

