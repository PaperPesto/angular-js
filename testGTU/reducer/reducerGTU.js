const array1 = [
    {
        id: 1,
        orario: {
            fine: 22020,
            inizio: 21221
        },
        tipoTurno: {
            code: "1"
        }
    },
    {
        id: 2,
        orario: {
            fine: 123323,
            inizio: 212312321
        },
        tipoTurno: {
            code: "2"
        }
    },
    {
        id: 3,
        orario: {
            fine: 232123,
            inizio: 541515
        },
        tipoTurno: {
            code: "3"
        }
    },
    {
        id: 14,
        orario: {
            fine: 23231,
            inizio: 212223231
        },
        tipoTurno: {
            code: "P"
        }
    },
    {
        id: 11,
        orario: {
            fine: 23231,
            inizio: 212223231
        },
        tipoTurno: {
            code: "1"
        }
    },
    {
        id: 1,
        orario: {
            fine: 23231,
            inizio: 212223231
        },
        tipoTurno: {
            code: "1"
        }
    }
];



var groupBy = function (xs, key1, key2) {
    return xs.reduce(function (rv, x) {
        (rv[x[key1][key2]] = rv[x[key1][key2]] || []).push(x);
        return rv;
    }, {});
};

console.log(groupBy(array1, 'tipoTurno', 'code'));


  //console.log(array1.groupBy((o) => {return o.tipoTurno.code}));



// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15