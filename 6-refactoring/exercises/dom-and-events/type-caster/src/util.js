/**
 *
 */
export const typeCaster = (input, type) => {
    return type === 'string' ? `String : ${String(input)}` :
        type === "number" ? `Number : ${Number(input)}` : `Boolean : ${Boolean(input)}`

};
