export const output = (newValue) => {
    const output = document.getElementById('casted-value')
    output.innerHTML = typeof newValue + ': ' + newValue;

}