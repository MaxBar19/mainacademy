/*var arr = [[1,2,4,5],
           [0,-1,3,8],
           [0,2,4,1],
           [3,8,9,10]]
var sum=0;
for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
        if(i == j && arr[i][j]>0) sum+=arr[i][j];
    }
}

console.log(sum);
*/
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

var num_modifier = num => num>10? Math.pow(num, 2) : num<7? console.log("The number is lower than 7") : num - 1

console.log(num_modifier(11));

//____lab2_____//

var length_count = arr => arr == undefined? console.log("Wrong argument exception") : arr.length;

console.log(length_count([1,2,3,4,5]));

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