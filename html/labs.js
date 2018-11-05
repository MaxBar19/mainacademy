//_____lab3_____//
function num_modifier(num) {
    if (num>10) return Math.pow(num, 2)
    else if (num<7) return console.log("The number is lower than 7")
    else if (num==8 || num==9) return num - 1
}
console.log(num_modifier(11));

//____lab2_____//
function length_count(arr) {
    if(arr == undefined) console.log("Wrong argument exception")
    else return arr.length;
}
console.log(length_count());

//___lab1____//
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