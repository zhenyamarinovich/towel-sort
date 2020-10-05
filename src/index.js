module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let arr = matrix.map((item, index) =>
        index % 2 !== 0 ? item.reverse() : item
    );
    return [].concat(...arr);
};
