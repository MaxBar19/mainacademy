var tmp;

for (i=1000; i<9999; i++){ 

    var true_value = i;
    var k = i;
    var sum = 0;
    var mul = 1;

    for (j=0; j<4; j++) {   

        tmp = k % 10;
        k = (k - tmp)/10;

        sum += tmp;
        mul *= tmp;
    
    }

    if (sum == mul) {
        console.log(true_value);
    }

}