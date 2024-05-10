/**
 *
 */
export const list = (arrayOfInput) => {
    let text = ''
    for (const item of arrayOfInput) {
        text += `\n- ${item}`
    }
    return text
};
