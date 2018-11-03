/*var arr3 = new Array(1,-4,-2,421,-2)

console.log(arr3[2]*2);
console.log(arr3[0]+arr3[4]);

arr3.forEach(function(item){
    console.log(item*2);
})

arr3.forEach(function(item){
    if (item < 0){
    console.log(Math.pow(item, 2));}
})



arr3.push(4);
console.log(arr3.indexOf(4));

arr3.forEach(function(item){
    if(item % 2 == 0) {
        item = 0;
    }
    else {
        item = 1;
    }
    
})*/

/*function matrixArray(rows,columns){
    var arr = new Array();
    for(var i=0; i<rows; i++){
      arr[i] = new Array();
      for(var j=0; j<columns; j++){
        arr[i][j] = i + j -2;
      }
    }
    return arr;
  }

var matrix = matrixArray(4,5);
*/



/*
var rows = 4; 
var col = 4;
var arr1 = new Array();

for (var i = 0; i < rows; i++) {
    arr1[i] = new Array()

    for(var j = 0; j < col; j++) {
        arr1[i][j] = i+j;
    }
}
console.log(arr1);*/

function square(a,b) {
    return a*b;
}

function cmp(a,b) {
    return (a>b)? a : b;
}

var a = prompt('Input side a of first | |: ');
var b = prompt('Input side b of first | |: ');
var a1 = prompt('Input side a of second | |: ');
var b1 = prompt('Input side b of second | |: ');

console.log('Bigger figure square: ',cmp(square(a,b),square(a1,b1)));


























