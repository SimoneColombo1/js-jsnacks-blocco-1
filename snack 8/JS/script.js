const body= document.getElementById(' article #container');
const DivRosso= document.createElement('div');
const DivVerde= document.createElement('div');
const Numeri= [1, 2, 3, 4, 5, 6, 7,8,9,10, 11,12, 13,14,15,16,17,18,19,20]; 

container.appendChild(DivVerde);
container.appendChild(DivRosso);

DivRosso.setAttribute("class", DivRosso.getAttribute("rosso") );

DivVerde.setAttribute("class", DivVerde.getAttribute("rosso") );

DivRosso.className = 'rosso';
DivVerde.className = 'verde';

for( let i=0; i< Numeri.length; i++){
const span= document.createElement('p');
span.append(Numeri[i]);
if(Numeri[i] % 2==0){
    DivVerde.appendChild(span);

}
else{
    DivRosso.appendChild(span);
}



}









