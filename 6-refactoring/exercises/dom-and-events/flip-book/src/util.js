/**
 *
 */
export const reverseAndUpper = (input) => {
    input = input.toUpperCase()
    let inputArr = input.split('')
    inputArr = inputArr.reverse()
    const output = inputArr.join('')
    return output
};
