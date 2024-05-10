/**
 *
 */
export const averageEvens = (allNumbers) => {
    const evensArray = allNumbers.filter(num => num % 2 === 0)
    const sumOfEvens = evensArray.reduce((acc, cur) => acc + cur, 0)
    const average = sumOfEvens / evensArray.length
    return average
};




