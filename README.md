# jsskilaverkefni3

## 3.2 DOM og Events. (3%)


### Hver er munurinn á static og live NodeList?

Live uppfærist sjálfkrafa en static gerir það ekki.

### Hver er munurinn á true og false í AddEventListener?

False -> bubbling phase eða sækir fyrst objectið og svo foreldrið
True -> capturing phase eða sækir fyrst foreldrið svo objectið


### this vísar í Event listener á html element en ekki á object. Þú getur notað bind() til að breyta því. Leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console “My name is Sam“ en ekki undefined.

´´´javascript
let Person = {  
  name: 'Sam',  
  sayName: function(){    
     console.log('My name is '+ this.name); 
  }
};
buttonEl.addEventListener('click', Person.sayName);
´´´

### svar:

´´´javascript
var buttonEl = document.getElementById("takki");

let Person = {  
  name: 'Sam',
  sayName: function(){   
     console.log('My name is '+ this.name);  
  }
};
buttonEl.addEventListener('click', Person.sayName.bind(Person));
´´´
