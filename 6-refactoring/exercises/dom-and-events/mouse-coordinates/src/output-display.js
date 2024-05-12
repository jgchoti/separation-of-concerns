export const outputDisplay = (result) => {
    const output = document.getElementById('user-interface');
    const newPEl = document.createElement('p')
    console.log(result)
    if (output.childElementCount < 2) {
        newPEl.innerText = result;
        output.appendChild(newPEl)
    } else {
        const pEl = output.lastElementChild
        pEl.innerText = result;
    }
}


// another separation to create output container ? 
// why result is in the same line