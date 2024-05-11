export const changeStyle = (input, selectedStyle) => {
    Array.from(input.classList).forEach(className => {
        if (!selectedStyle.includes(className)) {
            input.classList.remove(className);
        }
    });
    for (const element of selectedStyle) {
        input.classList.add(element)
    }
    return input
}