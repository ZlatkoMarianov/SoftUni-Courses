function solve(str, b) {

    buff = "";

    for (let i = 0; i < b; i++) {
        buff += str;

    }
    let a = 5

    let result = Math.pow(a, a);

    console.log(result.toFixed(2));
    console.log();

    return buff;
}

console.log(solve("pesho", 4));