import { arrayOfId } from '../data.js'

export const board = () => {

    const container = document.getElementById('user-interface')
    container.classList.add('centered')
    const tableEl = document.createElement('table')
    tableEl.classList.add('game')
    const tBodyEl = document.createElement('tbody')
    tBodyEl.setAttribute('id', 'board')

    for (let i = 0; i < arrayOfId.length; i++) {
        if (i % 3 === 0) {
            const trEl = document.createElement('tr');
            tBodyEl.appendChild(trEl);
        }
        const tdEl = document.createElement('td');
        tdEl.id = arrayOfId[i];
        tBodyEl.lastChild.appendChild(tdEl);
    }
    tableEl.appendChild(tBodyEl)
    container.appendChild(tableEl)
    return tableEl
}