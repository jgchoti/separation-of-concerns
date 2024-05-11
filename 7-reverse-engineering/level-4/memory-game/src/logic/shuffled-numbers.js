export const shuffledNumbers = (x, y) => {
    const maxNumber = Math.ceil((x * y) / 2);
    const numbers = [...Array(maxNumber).keys()].flatMap((index) => [
        index,
        index,
    ]);
    const arrayOfOutput = [...numbers.sort(() => Math.random() - 0.5)];
    return arrayOfOutput
}

