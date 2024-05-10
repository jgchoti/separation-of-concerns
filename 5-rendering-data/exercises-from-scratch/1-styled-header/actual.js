'use strict';


const actual = (level, text, styling) => {
    const headerEl = document.createElement(`h${level}`);
    headerEl.className = styling;
    headerEl.innerHTML = text;
    return headerEl;
}


