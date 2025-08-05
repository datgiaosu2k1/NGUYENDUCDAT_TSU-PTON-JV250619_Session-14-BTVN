let original = {
    name:"dora",
    age: 25
}
const copy = JSON.parse(JSON.stringify(original));
copy.name ="Đức Đạt";
console.log(original);
console.log(copy);
