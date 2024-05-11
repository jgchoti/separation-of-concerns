import { substring } from '../logic/utils.js'

export const substringHandler = () => {
    const inputElements = document.querySelectorAll('input')
    const outputInterface = document.getElementById('program-output')
    let arrayOfInput = []
    inputElements.forEach(inputEl => { arrayOfInput.push(inputEl.value) })
    const output = substring(arrayOfInput)
    console.log(output)
    outputInterface.innerText = output

}