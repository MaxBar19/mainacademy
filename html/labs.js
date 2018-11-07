<<<<<<< HEAD
<<<<<<< HEAD
//_____lab12_____//



//_____lab11_____//

var regex = /РАЗ-РАЗ-РАЗ-РАЗ-РАЗ/ig;

var str = "Раз-РАЗ-раз-рАз-рАЗ";

var str_replace = str.replace(regex, '1-2-3-4-5');

console.log(str_replace);

//_____lab10_____//
/*
var str = "hello"
var str_arr = str.split("").reverse().join("");
console.log(str.length + " " + str_arr);
*/
//_______________________
=======
=======
>>>>>>> e099147f39fa2aebe20199bdd23e057cd913b7a1
//_____lab10_____//

var str = "hello"
var str_arr = str.split("").reverse().join("");
console.log(str.length + " " + str_arr);


<<<<<<< HEAD
>>>>>>> e099147f39fa2aebe20199bdd23e057cd913b7a1
=======
>>>>>>> e099147f39fa2aebe20199bdd23e057cd913b7a1
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
var concat_arr = (a, b) => a.concat(b);
var x = concat_arr([1,2,1,1,1,3], [2,2,2,3,5,1,1,2,3,4])

console.log(x.filter(unique));
*/
//_____lab5_____//
/*
var concat_arr = (a, b) => a.concat(b);
var reverse_arr = a => a.reverse();
console.log(concat_arr([1,2,3], [2,3,4]));
*/
//_____lab4_____//
/*
var value = a => (b) => {return a*b}
var mul = value(3);
console.log(mul(4));
*/
//_____lab3_____//
/*
var num_modifier = num => num>10? Math.pow(num, 2) : num<7? console.log("The number is lower than 7") : num - 1
console.log(num_modifier(8));
*/
//____lab2_____//
/*
var length_count = arr => arr == undefined? console.log("Wrong argument exception") : arr.length;
console.log(length_count([1,2,3,4,5]));
*/
//___lab1____//
/*
var object_creator = (countries,population) => {
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