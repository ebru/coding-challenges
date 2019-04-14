/**
 * Returns the smallest positive integer (greater than 0) that does not occur in array
 * 
 * @param {array} arr 
 */
function smallestPositiveInteger(arr) {
    let occurrence = {};

    for (let val of arr) {
        if (!occurrence[val]) {
            occurrence[val] = true;
        }
    }

    let smallest;
    let smallestFind = false;

    let i = 1;

    while (!smallestFind) {
        if (!(occurrence[i])) {
            smallest = i;
            smallestFind = true;
        }

        i++;
    }

    return smallest;
}

module.exports = smallestPositiveInteger;