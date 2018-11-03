function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}



var arr = [];

for (var i = 0; i < 5; i++){
    arr.push(i);
    shuffle(arr);
}
console.log("shuffled array: ", arr);
console.log("third element: ", arr[2])

/*var shuffled_arr = arr.sort(function(){
    return Math.random() - 0.5;
}
);*/