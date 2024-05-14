const Nutente= Number.parseInt(prompt('Inserisci un numero'));


for (i=0; i<Nutente; i++){

    const Array= []
   
    for(i=0 ; i<Nutente ; i++){
     Array.push( Math.floor (Math.random() *101));
   }


   console.log(Array);

}

