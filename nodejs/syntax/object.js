var members = ['a','b','c'];
console.log(members[1]);
//배열
var i = 0;
while(i<members.length){
    console.log('array loop',members[i]);
    i +=1;
}

var roles = {
    'programmer':'a',
    'designer':'b',
    'manager':'c'
} //객체
console.log(roles.manager);
console.log(roles['manager']);

for(var n in roles){
    console.log('object =>', n, 'value =>', roles[n]);
}