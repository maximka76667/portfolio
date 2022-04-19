import gsap from 'gsap';
import paper from 'paper';

let clientX = -50;
let clientY = -50;
let lastX = 0;
let lastY = 0;
let group;
let isHover = null;

const initCanvas = (color) => {
  const canvas = document.querySelector('.cursor__canvas');

  paper.setup(canvas);

  const strokeColor = color;
  const strokeWidth = 1;
  const segments = 8;
  const radius = 15;

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);

  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.fillColor = color;
  polygon.fillColor.alpha = 0;
  polygon.smooth();

  group = new paper.Group([polygon]);

  paper.view.onFrame = () => {
    lastX = lerp(lastX, clientX, 0.2);
    lastY = lerp(lastY, clientY, 0.2);
    group.position = new paper.Point(lastX, lastY);
    if (isHover && polygon.fillColor.alpha <= 1) {
      polygon.fillColor.alpha += 0.05;
    } else if (!isHover && polygon.fillColor.alpha >= 0) {
      polygon.fillColor.alpha -= 0.05;
    }
  };

  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      isHover = true;
    });
  });

  links.forEach((link) => {
    link.addEventListener('mouseleave', () => {
      isHover = false;
    });
  });

  polygon.smooth();
};

function initCursor(color) {
  initCanvas(color);

  document.addEventListener('mousemove', (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  const render = () => {
    gsap.set('.cursor-wrapper', {
      x: clientX,
      y: clientY,
    });
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
}

export default initCursor;
