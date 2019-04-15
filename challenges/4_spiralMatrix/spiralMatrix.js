/**
 * Generates a square matrix filled with elements from 1 to n2 in spiral order
 * 
 * @param {number} n 
 */
function spiralMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }

    let counter = 1;
    let startRow = 0, endRow = n - 1;
    let startColumn = 0, endColumn = n - 1;

    while (startRow <= endRow) {
        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // right column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // left column
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;

    }

    return matrix;
}

module.exports = spiralMatrix;