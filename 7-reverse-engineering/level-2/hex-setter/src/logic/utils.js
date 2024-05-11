export const changeColor = (hex) => {
    let colorCode = `#${hex}`
    document.body.style.background = colorCode;

}

export const changeText = (hex) => {
    let text = `background-color: #${hex}`
    let output = document.getElementById('new-style')
    let input = document.getElementById('hex-value')
    let darkFontClass = 'dark-font'
    let lightFontClass = 'light-font'
    output.innerHTML = text
    if (hex === '000000' || hex.substring(0, 5) === '00000') {
        output.classList.add(lightFontClass)
        input.classList.add(lightFontClass)
        output.classList.remove(darkFontClass)
        input.classList.remove(darkFontClass)
    } else {
        output.classList.add(darkFontClass)
        input.classList.add(darkFontClass)
        output.classList.remove(lightFontClass)
        input.classList.remove(lightFontClass)
    }
}