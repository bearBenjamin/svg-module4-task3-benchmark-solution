let PERCENTAGE = null;

// нахожу все необходимые переменные
const svg = document.querySelector('svg');
const path = svg.querySelector('path');
const pathLength = path.getTotalLength();
const motionElement = svg.querySelector('.target');

const htmlElement = document.documentElement;
// добавили высоту и увеличили ее умножив на три
htmlElement.style.height = `${svg.scrollHeight * 3}px`;
const documentHeight = htmlElement.scrollHeight;

// основная функция
const updatePosition = () => {
	const position = path.getPointAtLength(PERCENTAGE * pathLength);

	motionElement.setAttribute('transform', `translate(${position.x}, ${position.y})`);

	requestAnimationFrame(updatePosition)
};

const updatePercentage = () => {
	PERCENTAGE = htmlElement.scrollTop / (documentHeight - htmlElement.clientHeight);
};

// добавляю обработчик скролла
window.addEventListener('scroll', updatePercentage);

requestAnimationFrame(updatePosition);
