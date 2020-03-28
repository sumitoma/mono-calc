const add = require('./add');

module.exports = function multiply(x, y){
    let result = 0;
    for(i=1;i<=y;i++){
        result = add(result, x);
    }
    return result;
}

