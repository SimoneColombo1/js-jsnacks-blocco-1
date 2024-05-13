const invitati= [
  "gino",
  "piero",
  "sofia",
  "alberto",
  "gina"

]
console.log(invitati); 

const NomeUtente= prompt('inserire il proprio nome');





    if(invitati.includes(NomeUtente)){

    console.log('complimenti', NomeUtente, 'puoi partecipare alla festa')
}
else{
    console.log('ci spiace ', NomeUtente, 'non puoi partecipare alla festa')
}


