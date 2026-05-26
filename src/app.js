let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];




const selector = (array) => {


  let elegir = Math.floor(Math.random() * array.length);

  return elegir


}


const excusa = () => {

  return `${who[selector(who)]} ${action[selector(action)]} ${what[selector(what)]} ${when[selector(when)]}`;
}

let intervalo;

function excusas(){


    intervalo = (setInterval(() => {



    const contenedor = document.getElementById("excuse");
    contenedor.innerHTML = excusa();



  }, 1000)); 




}

function detenerExcusa(){


  clearInterval(intervalo);
}

 








