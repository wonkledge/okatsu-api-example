//data are wrap inside _doc property to imitate mongo document returns using mongoose library.

const books = [
    {
    _doc: {
            id: 1,
            title: 'In Search of Lost Time',
            author: 'Marcel Proust',
            bestSeller: true,
            sales: 1938430
        }
    },
    {
        _doc: {
            id: 2,
            title: 'Ulysses',
            author: 'James Joyce',
            bestSeller: true,
            sales: 32432
        }
    },
    {
        _doc: {
            id: 3,
            title: 'Don Quixote',
            author: 'Miguel de Cervantes',
            bestSeller: false,
            sales: 35657
        }
    }
];

export default books;