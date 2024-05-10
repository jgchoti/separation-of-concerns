export const changeColor = (target, reveal) => {
    if (reveal) {
        target.classList.remove('hidden');
        target.classList.add('revealed');
    } else {
        target.classList.remove('revealed');
        target.classList.add('hidden');
    }
}