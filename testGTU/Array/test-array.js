let superEroi = [
    {
        nome: 'Paperinik',
        razza: 'Papero',
        gadgets: [
            {
                tipo: 'Auto',
                nome: '303'
            },
            {
                tipo: 'arma',
                nome: 'Arpioncino'
            },
            {
                tipo: 'vestito',
                nome: 'mantello'
            }
        ]
    },
    {
        nome: 'Thor',
        razza: 'Hasgardiano',
        gadgets: [
            {
                tipo: 'arma',
                nome: 'Martello di Odino'
            },
            {
                tipo: 'vestito',
                nome: 'mantello'
            }
        ]
    }
]

// il forEach si tiene le referenze all'array originale!

superEroi.forEach(eroe => {
    eroe.gadgets.forEach(gadget => {
        gadget.nome = 'distrutto';
    });
});

console.log(JSON.stringify(superEroi, null, 2));