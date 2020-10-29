// Notaðu querySelector() til að velja málsgrein nr 2. og litaðu textann grænan.

// https://www.w3schools.com/cssref/sel_nth-of-type.asp
var textGreen = document.querySelector('p:nth-of-type(2)');
textGreen.style.color = 'green';




//Veldu allar málgreinar og breyttu textanum með textContent aðferðinni.

var malsgreinar = document.querySelectorAll('p');

texti = ['Ég er fyrstur', 'Ég er grænn!', 'Ég er þriðji'];

for (i = 0; i < texti.length; i++){
    malsgreinar[i].textContent = texti[i];
}

/* Líka hægt að gera manual.
var text1 = '1';
var text2 = '2';
var text3 = '3';

malsgreinar[0].textContent = text1;
malsgreinar[1].textContent = text2;
malsgreinar[2].textContent = text3;*/



// Bættu við neðst með createElement() og append() málsgrein með nafninu þínu.

var newPara = document.createElement("p");
var mittNafn = document.createTextNode('Elfar Snær Arnarson');
newPara.append(mittNafn);
document.body.append(newPara);



