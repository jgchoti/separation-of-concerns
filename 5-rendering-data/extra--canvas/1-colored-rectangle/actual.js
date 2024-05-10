'use strict';

const actual = (color, rect) => {
  const canvasEl = document.createElement('canvas');
  const ctx = canvasEl.getContext('2d');

  const [x, y, width, height] = rect;

  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  return canvasEl;
};
