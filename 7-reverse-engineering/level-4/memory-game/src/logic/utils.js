export const revealNum = (target, isRevealed) => {
    const hiddenClass = 'hidden'
    const visibleClass = 'visible'

    if (isRevealed) {
        target.classList.add(visibleClass)
        target.classList.remove(hiddenClass)
    } else {
        target.classList.add(hiddenClass)
        target.classList.remove(visibleClass)
    }
}