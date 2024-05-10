import { capSwap } from './util.js';

export const capSwapHandler = () => {
    const input = prompt('enter a string to cap-swap')
    const output = capSwap(input)
    alert(output)
};
