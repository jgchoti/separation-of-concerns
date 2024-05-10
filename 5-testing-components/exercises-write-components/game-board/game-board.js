/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
    const tableEl = document.createElement('table')
    const tbodyEl = document.createElement('tbody')
    tableEl.appendChild(tbodyEl)
    for (const array of arrayOfArrays) {
        const trEl = document.createElement('tr')
        tbodyEl.appendChild(trEl)
        for (const item of array) {
            const tdEl = document.createElement('td')
            tdEl.innerHTML = item
            trEl.appendChild(tdEl)
        }
    }
    return tableEl
};
