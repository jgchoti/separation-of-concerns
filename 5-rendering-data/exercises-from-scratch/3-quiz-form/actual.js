'use strict';

const actual = ({ question, answers, correct, selected }) => {
    const formEl = document.createElement('form')
    const pEl = document.createElement('p')
    pEl.innerHTML = question
    formEl.appendChild(pEl)
    for (let i = 0; i < answers.length; i++) {
        const inputEl = document.createElement('input')
        inputEl.type = "radio"
        inputEl.name = "answers"
        if (i === selected) {
            inputEl.checked = true;
        }
        const textEl = document.createElement('text')
        textEl.textContent = `${answers[i]} ${i === correct && correct === selected ? ' √' : i === selected && correct !== selected ? ' ✖' : ""}`
        textEl.className = i === correct && correct === selected ? 'correct' : i === selected && correct !== selected ? 'incorrect' : null

        const brEl = document.createElement('br');
        formEl.appendChild(inputEl)
        formEl.appendChild(textEl)
        formEl.appendChild(brEl)
    }
    return formEl
};
