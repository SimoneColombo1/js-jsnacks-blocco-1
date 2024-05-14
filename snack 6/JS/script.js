const Numeri= [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
]

let sum= 0;
for(let i=0; i < Numeri.length; i++){
    
    if (i % 2 == 1){
  sum =   sum + Numeri[i];
 
}
}
 console.log(sum);