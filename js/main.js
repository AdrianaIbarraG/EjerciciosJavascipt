


console.log("*********Ejercicio 1: Número mayor*************");
let lista = [3, 5, 7, 1, 6];

    max=0; 
    for(pos=0; pos<lista.length; pos++){
        if(max<lista[pos]){
            max = lista[pos]; 
        }//if
    };//for
console.log(max);
   

console.log("*********Ejercicio 2 Número menor*************");
let list_Num = [-1, 3, 4, 2, 6];

    let min=list_Num[0];
    for (pos=0; pos<list_Num.length; pos++){ 
        if(min>list_Num[pos]){
            min = list_Num[pos];
        }//if
    }; //for
console.log(min);

console.log("*********Ejercicio 3 Número repetido*************");
//let array = [1, 22, 5, 17, 10, 5, 40, 5];
//let array = [7, 41, 5, 7, 10, 13, 2];
let array = [1, 22, 5, 14, 24, 31, 27, 15, 105];
//let numero = arreglo.values(); 

let contador=0; 
let repetido=0; 
let x=0; 

    for (let pos=0; pos<array.length; pos++){
        for (x=pos+1; x<array.length; x++){
            if(array[pos]==array[x]){
                repetido=array[pos]
            }//if
        } 
    };
    if (repetido>0){
        console.log ("El número " + repetido + " se encuentra más de una vez");
    }else{
        console.log("No hay números repetidos"); 
    };

console.log("*********Ejercicio 4 arreglo random*************");

let arreglo = [1, 2, 5, 14, 24, 31, 50, 105];

/* max=arreglo.length;
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
let random = getRandomInt(max);
console.log(random);
for (pos=0; pos<arreglo.length; pos++){
    arreglo2 += arreglo2[random];
}
console.log(arreglo2);  */

function desordenar(arreglo){
arreglo = arreglo.sort(function(){return Math.random()-0.5});
return arreglo; 
};
let arreglo2=[];
    random = desordenar(arreglo);
    arreglo2[pos]=random; 
    console.log(pos, random);