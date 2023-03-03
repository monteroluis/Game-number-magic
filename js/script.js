

let btnCorrect;
let magic;
let intents=2;

function vectorAleatory(){
    const vector = [];
    const numOptions = document.getElementsByClassName("item-options").length - 1;
    magic=Math.floor(Math.random()*100+1);
    const pos=Math.floor(Math.random() * 10);/*Posicion aleatoria en el vector*/ 
    btnCorrect="button"+(pos+1);

    while(vector.length<=numOptions) {
        const number = Math.floor(Math.random()*100+1);

        if (vector.indexOf(number) === -1 && number != magic) {
            vector.push(number);
        }
    }
    vector.splice(pos,0,magic);
    console.log("magic "+magic)
    console.log(btnCorrect)
    return vector;  
}


function  start() {

	reboot();
    DisabledButtons(false);
	let numbers=vectorAleatory();	
    let numOptions = document.getElementsByClassName("item-options").length;
     
    for (var i = 0; i < numOptions; i++) {
        document.getElementsByClassName("item-options")[i].value = numbers[i];
       
    }

    

}

function botonOnclick(e){
    let win=false;
    
 
 const select=e.target.id;
    // statement
 document.getElementById(select).disabled = true
    if(select===btnCorrect){
         document.getElementById(select).style.backgroundColor = color="green";
         document.getElementById('result').style.fontWeight = 'bold'
         document.getElementById('result').innerHTML = magic+"<br/> <strong>Ganaste</strong> ";
         DisabledButtons(true)
         win=true;
     
    }else{
      document.getElementById(select).style.backgroundColor = 'tomato'  
    }

 intents+=-1;
 console.log("intentos"+intents)

 if (intents<0 && win===false) {
         document.getElementById('result').style.fontWeight = 'bold'
         document.getElementById('result').innerHTML = magic+"<br/> <strong>Perdiste</strong> ";
         DisabledButtons(true);

}
}


function listener(){

  let buttons = document.querySelectorAll('.item-options');
  buttons.forEach((boton) => {
  boton.addEventListener('click',botonOnclick);

});
}

function DisabledButtons(estado){
  let buttons = document.querySelectorAll('.item-options');
  buttons.forEach((boton) => {
  boton.disabled = estado;

});
}

function reboot(){
    intents=2;
    document.getElementById('result').innerHTML = "";
    let buttons = document.querySelectorAll('.item-options');
  buttons.forEach((boton) => {
  boton.style.backgroundColor = "#A534EB";

});

}


