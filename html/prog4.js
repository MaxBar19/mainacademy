//__________floor_task____________//
/*var floor = 30;
var appart = 81;

if ((appart/3+1) % 2 == 0) {
    if (appart/3+2 >= floor/3 + 1) {
        console.log(floor/3)
    }
    else console.log(floor/3 + 1);
}
else console.log(floor/3 + 1);
*/

//_________array_generator________//
/*var rows = 4; 
var col = 4;
var arr1 = new Array();

for (var i = 0; i < rows; i++) {
    arr1[i] = new Array()

    for(var j = 0; j < col; j++) {
        arr1[i][j] = i+j;
    }
}
console.log(arr1);
*/

//_______array_generator_with_push________// 
/*var matrix = [];
var str = [];

for(var i = 0; i < 4; i++) {
    str =[];
    for(var j = 0; j < 4; j++) {
        if(i == j) {
            str.push(1);
        }
        else if (i > j) {
            str.push(2);
        }
        else str.push(0);   
    }
    matrix.push(str);
}

console.log(matrix);
*/

/*var countries = ['America','Japan','Sweden','Norvey'];
var population = [123123, 321321, 232323, 121212];

for (var i = 0; i < countries.length; i++) {
    console.log(countries[i], population[i]);
}*/


var arr = [{FirmName:"Chevrolet", ModelName:"RX-01", EngineDisplacement:""},
            {FirmName:"Honda", ModelName:"RX-02", EngineDisplacement:""},
            {FirmName:"Hundai", ModelName:"RX-03", EngineDisplacement:""},
            {FirmName:"Lexus", ModelName:"RX-04", EngineDisplacement:""},
            {FirmName:"BMV", ModelName:"RX-05", EngineDisplacement:""}]

var empty_arr = [];

var pro = prompt('Введите количество машин: ')

for(var i = 0; i < pro; i++){

    arr[i].EngineDisplacement = prompt('Введи обьем двигателя: ');
    arr[i].ModelName = prompt('Введи название модели: ');
    arr[i].FirmName = prompt('Введи название фирмы: ');

    console.log(arr[i]);


}