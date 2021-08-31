// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

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

export function makeArrayOfNames(arr) {
    let accumulate = [];
    arr.forEach((a) => {
        accumulate.push(a.name);
    });
    return accumulate;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    let accumulator = [];
    arr.forEach((b) => {
        accumulator.push(b.type);
        accumulator = accumulator.reverse();
    });
    return accumulator;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    let accumulator = [];
    arr.forEach((c) => {
        accumulator.push({ nombre: c.name, tipo: c.type });
    });
    return accumulator;
}
