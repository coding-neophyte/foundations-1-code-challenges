// Use the filter or find array methods to solve these problems

/*
Input:
[
    {
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    {
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    {
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    {
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        {
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output:
[
    {
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        {
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    const dairyItems = arr.filter((dairy) => {
        if (dairy.category === 'dairy') {
            return dairy;
        }
    });
    return dairyItems;
}

/*
Output:
[
    {
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const moreThanTwo = arr.find((fruit) => {
        if (fruit.category === 'fruit' && fruit.price > 2) {
            return fruit;
        }
    });
    return [moreThanTwo];

}


/*
Output:
    {
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const needCheese = arr.find((cheese) => {
        if (cheese.id === 'cheese') {
            return cheese;
        }
    });

    return needCheese;
}


/*
Output:
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    let fruitNames = [];
    arr.filter((fruit) => {
        if (fruit.category === 'fruit') {
            fruitNames.push(fruit.id);
        }

    });
    // const fruitArray = fruitNames.map((fruitName) => {
    //     return fruitName.name;


    // });
    return fruitNames;
}
