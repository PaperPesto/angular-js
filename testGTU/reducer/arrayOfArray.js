let arrayOfArray = [
    [
        {nome: 'pesche', quantita: 10},
        {nome: 'banane', quantita: 4},
        {nome: 'uva', quantita: 116},
    ],
    [
        {nome: 'maiali', quantita: 2},
        {nome: 'lucertole', quantita: 6},
    ],
    [
        {nome: 'staccionate', quantita: 125},
        {nome: 'strade', quantita: 300},
        {nome: 'pali', quantita: 25},
        {nome: 'fontanelle', quantita: 2},
    ]
]


let reduce = arrayOfArray.reduce((acc, curr) => acc + curr.reduce((inner_acc, inner_curr) => inner_acc + inner_curr.quantita, 0), 0);

console.log('result', reduce);