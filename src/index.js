// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined || matrix.length === 0) {
        return result;
    };
    matrix.forEach((arr, i) => {
        if (i % 2 !== 0)
            arr.reverse();
        arr.forEach((elem) => {
            result.push(elem);
        })
    });
    return result;
}
