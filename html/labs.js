//var countries = ["Ukraine", "Japan", "Sweden", "China"];
//var population = [50, 20, 30, 1000];

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