/**
 *
 */
export const search = (array, input) => {
    let text = ''
    for (const item of array) {
        if (item.includes(input)) {
            text += `\n- ${item}`
        }
    }
    return text === '' ? 'Not Found' : text
};
