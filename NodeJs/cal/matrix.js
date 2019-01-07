//matrix addition

var matrixadd = (array1, array2) => {

    //var array1 = [[2, 3], [2, 4]];
    // var array2 = [[1, 6], [3, 7]];
    var array3 = [];

    for (var i = 0; i < 2; i++) {
        array3[i] = [];
        for (var j = 0; j < 2; j++) {
            array3[i][j] = 0;
        }
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            array3[i][j] = array1[i][j] + array2[i][j]
        }
    }
    //var array3= (math.add(array1,array2));
    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < 2; j++) {
            process.stdout.write(array3[i][j] + " ");
        }

        console.log('\n');
    }

    return array3;
}
// matrixadd();

// matrix substraction 
var sub = (array1, array2) => {

    //var array1 = [[2, 3], [2, 4]];
    // var array2 = [[1, 6], [3, 7]];
    var array3 = [];

    for (var i = 0; i < 2; i++) {
        array3[i] = [];
        for (var j = 0; j < 2; j++) {
            array3[i][j] = 0;
        }
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            array3[i][j] = array1[i][j] - array2[i][j]
        }
    }


    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < 2; j++) {
            process.stdout.write(array3[i][j] + " ");
        }

        console.log('\n');
    }

    return array3;
}

//matrix transpose

var tranpose = (array1) => {

    //var array1 = [[2, 3], [2, 4]];
    // var array2 = [[1, 6], [3, 7]];
    var array3 = [];

    for (var i = 0; i < 2; i++) {
        array3[i] = [];
        for (var j = 0; j < 2; j++) {
            array3[i][j] = 0;
        }
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            array3[i][j] = array1[j][i] 
        }
    }


    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < 2; j++) {
            process.stdout.write(array3[i][j] + " ");
        }

        console.log('\n');
    }

    return array3;
}


//matrix multiplication

var multi = (array1, array2) => {

    //var array1 = [[2, 3], [2, 4]];
    // var array2 = [[1, 6], [3, 7]];
    var array3 = [];

    for (var i = 0; i < 2; i++) {
        array3[i] = [];
        for (var j = 0; j < 2; j++) {
            array3[i][j] = 0;
        }
    }

    for (i = 0; i < 2; i++)
        {
            for (j = 0; j < 2; j++)
            {
                for (var k = 0; k < 2; k++)
                {
                    array3[i][j] = array3[i][j] + array1[i][k] * array2[k][j];
                }
            }
        }
    //var array3= (math.add(array1,array2));
    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < 2; j++) {
            process.stdout.write(array3[i][j] + " ");
        }

        console.log('\n');
    }

    return array3;
}

module.exports = { matrixadd, sub,tranpose,multi};