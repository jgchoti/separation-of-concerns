/**
 *
 */
export const average = (array) => {
    const sum = array.reduce((acc, cur) => acc + cur, 0)
    const runningAverage = sum / array.length
    return runningAverage
};
