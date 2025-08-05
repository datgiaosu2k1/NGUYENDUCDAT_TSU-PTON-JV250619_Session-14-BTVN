let person = {
    name:'dora',
    age: 25,
    job: 'Helping Nobita with futuristic gadgets'
}
console.log(person.name);
console.log(person);
for( key in person){
    console.log(key, person[key]);
}