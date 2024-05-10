/**
 *
 */
export const replaceWith = (string, oldChar, newChar) => {
    let newString = ""
    for (const char of string) {
        if (char === oldChar) {
            newString += newChar
        } else {
            newString += char
        }
    }
    return newString
};
