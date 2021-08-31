// user Object.values and Object.key to solve these problems!

/*
Input:
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    const weirdString = Object.keys(someObject);
    return weirdString;
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let screamKeys = {};
    const keys = Object.keys(someObject);
    keys.forEach((a) => {
        return screamKeys[a.toUpperCase()] = someObject[a];
    });
    return screamKeys;
}

/*
Output:
[
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const tuple = Object.entries(someObject);
    return tuple;
}
