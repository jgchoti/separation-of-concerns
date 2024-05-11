export const capitalizeFirst = (text) => {
    const firstChar = text.charAt(0).toUpperCase();
    const restChars = text.slice(1).toLowerCase();
    return firstChar + restChars;
}
export const capitalize = (text) => {
    return text.toUpperCase();

}