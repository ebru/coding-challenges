/**
 * Finds the number of subsets that sum to remaining numbers
 * 
 * @param {array} arr
 */
function subsetsThatSumRemainingNumbers(arr) {
    let count = 0;

    for (let k = arr.length - 1; k > 0; k--) {
        let subArr = arr.slice(0, k);

        for (let i = 0; i < Math.pow(2, subArr.length); i++) {
            let j = subArr.length - 1;
            let sum = 0;

            do {
                if ((i & (1 << j)) !== 0) {
                    sum += subArr[j];
                }

                if (sum > arr[k]) {
                    break;
                }

            } while (j--);

            if (sum === arr[k]) {
                count++;
            }
        }
    }
    return count;
}

module.exports = subsetsThatSumRemainingNumbers;