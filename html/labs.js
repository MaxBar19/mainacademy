//_____lab8_____//
/*
function sorted(arr){
    return arr.sort(function (a,b){
        return a - b
    })
}
console.log(sorted([0,125125,-123,23,23,1,1,1,23,4,5]))
*/
//_____lab7_____//
/*
function average(arr){
sum = 0;
for(var i = 0; i < arr.length; i++){
    sum+=arr[i]
}
for(var i = 0; i < arr.length; i++){
    if(arr[i]<0) return console.log('Error');
}
return sum/arr.length
}
console.log(average([1,-2,3,4,5,6,7]));
*/
//_____lab6_____//
/*
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
function concat_arr(a,b){
    return a.concat(b);
}
var x = concat_arr([1,2,1,1,1,3], [2,2,2,3,5,1,1,2,3,4])

console.log(x.filter(unique));
*/
//_____lab5_____//
/*
function concat_arr(a,b){
    return a.concat(b);
}
function reverse_arr(a) {
    return a.reverse();
}
console.log(reverse_arr([1,2,3]));
*/
//_____lab4_____//
/*
function value(a) {
    return function(b){return a*b}
}
var mul = value(3);
console.log(mul(4));
*/
//_____lab3_____//
/*
function num_modifier(num) {
    if (num>10) return Math.pow(num, 2)
    else if (num<7) return console.log("The number is lower than 7")
    else if (num==8 || num==9) return num - 1
}
console.log(num_modifier(11));
*/
//____lab2_____//
/*
function length_count(arr) {
    if(arr == undefined) console.log("Wrong argument exception")
    else return arr.length;
}
console.log(length_count());
*/
//___lab1____//
/*
function object_creator(countries, population) {

var pops_in_countries = {};

for(var i = 0; i < countries.length; i++){
    pops_in_countries.countries = countries[i];
    pops_in_countries.population = population[i];

    console.log(pops_in_countries);
}

return pops_in_countries;
}

object_creator(["12","23","43"], [12,23,43]);
*/