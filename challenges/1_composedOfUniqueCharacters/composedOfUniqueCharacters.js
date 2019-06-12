/**
 * Checks if string given is composed of all unique characters
 * 
 * @param {string} string 
 */
function composedOfUniqueCharacters(string) {
    let freqs = {};
    let str = string.replace(/\s/g, '').toLowerCase();

    for (let char of str) {
        freqs[char] = freqs[char] + 1 || 1;

        if (freqs[char] > 1) {
            return 0;
        }
    }

    return 1;
}

module.exports = composedOfUniqueCharacters;