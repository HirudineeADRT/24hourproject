let bigInt = require('big-integer');
let random = require('math-random');

exports.handler = async (event) => {

    let x = bigInt(6).and(3);
    console.log("bigInt output : "+x);

    console.log(random());

    return { "message": "Successfully executed" };
};