// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    const nameArray = arr.map((n) => {
        return n.name;
    });
    return nameArray;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungry = arr.map((b) => {
        return { name: b.name, isHungry: true, type: b.type };
    });
    return hungry;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shouting = arr.map((b) => {
        return { name: b.name.toUpperCase(), type: b.type };

    });
    return shouting;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const string = arr.map((a) => {
        return a.name + a.type;
    });
    return string;
}

/*
Output:

[
    [
        ['name', 'spot'],
        ['type', 'dog']
    ],
    [
        ['name', 'rover'],
        ['type', 'dog']
    ],
    [
        ['name', 'jumpy'],
        ['type', 'frog']
    ],
    [
        ['name', 'einstein'],
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const arrayOfArray = arr.map((b) => {
        return [['name', b.name], ['type', b.type]];
    });
    return arrayOfArray;
}
