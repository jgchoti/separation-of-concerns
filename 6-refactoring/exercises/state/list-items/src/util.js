/**
 *
 */
export const list = (arrayOfInput, bulletPoint) => {
    let output = ''
    for (const input of arrayOfInput) {
        output += `\n${bulletPoint} ${input}`
    }
    return output
};
