String.prototype.toJadenCase = function () {
    return this
        .split(' ')
        .map(x=> x[0].toUpperCase() + x.slice(1))
        .join(' ');
}

let str = "i'm happy"
console.log(str.toJadenCase());

