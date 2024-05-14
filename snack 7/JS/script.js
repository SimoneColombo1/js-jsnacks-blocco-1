const Nutente= Number.parseInt(prompt('Inserisci un numero'));


for (let i=0; i < Nutente; i++){
    
    let Array = [];
   
    for(let g=0 ; g < 10 ; g++){
     Array.push( Math.floor (Math.random() *101));
   }


   console.log(Array);

}

