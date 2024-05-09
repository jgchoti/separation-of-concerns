'use strict';

const actual = (linksData) => {
  const divEl = document.createElement('div');

  const h3El = document.createElement('h3');
  h3El.textContent = linksData.topic;
  divEl.appendChild(h3El);

  const entryToLi = (key, entry) => {
    const liEl = document.createElement('li');
    const aEl = document.createElement('a');
    aEl.innerHTML = key;
    aEl.href = entry[key];
    aEl.target = '_blank';
    liEl.appendChild(aEl);
    return liEl;
  };

  const appendLiToList = (listEl, nextLi) => {
    listEl.appendChild(nextLi);
    return listEl;
  };
  const ulEl = document.createElement('ul')
  Object.keys(linksData.links).map((key) => entryToLi(key, linksData.links[key])).reduce(appendLiToList, ulEl);

  divEl.appendChild(ulEl);

  return divEl;
};
