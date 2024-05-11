export const substring = (array) => {
    let [text, start, length] = array
    start = Number(start)
    length = Number(length)
    const output = text.substring(start, start + length)
    return output
}