// function a(){
//     console.log('A');
// }

var a = function (){
    console.log('A');
} //function 값

function slowfunc(callback){
    callback();
} 

slowfunc(a);