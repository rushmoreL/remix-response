const container = document.getElementById('rectangleContainer');
const colors = ['#1BAAA0', '#7DDDF5', '#FBC396', '#FC7E8A', '#AEA0E8', '#D9AE9D']; // Array of specified colors
const wordLinks = [
    { word: 'EMPATHY', url: 'https://media.milanote.com/p/files/1Rqwz71p11SPan/7vx/invisible.mp4' },
    { word: 'IMPACT', url: 'https://sealluo.com/nurturingthefuture' },
    { word: 'EMOTIONAL', url: 'https://vimeo.com/779424865' },
    { word: 'SIMPLE', url: 'https://sealluo.com/presspause' },
    { word: 'SEAL', url: 'https://openprocessing.org/sketch/1664919' },
    { word: 'MULTIMEDIA', url: 'https://vimeo.com/648431420' },
    { word: 'NARRATIVE', url: 'https://vimeo.com/648431420' },
    { word: 'AI', url: 'https://vimeo.com/821862142' },
    { word: 'GRAPHICS', url: 'https://violentsealluo.cargo.site/Illustration-1-Chinese-Zodiac' },
    { word: 'MOTION', url: 'https://vimeo.com/user89296330' },
    { word: 'CODING', url: 'https://openprocessing.org/sketch/1665457' },
    { word: 'UNDERSTANDABLE', url: 'https://vimeo.com/518451908' },
  ];


function createRectangle(event) {
  const rect = document.createElement('div');
  rect.classList.add('rectangle');

  // Use the horizontal click position for the rectangle's left position
  const rectWidth = 500; // Assuming each rectangle is 50px wide
  rect.style.left = (event.clientX - rectWidth / 2) + 'px'; // Center the rectangle on the mouse x position
  
  // Set a fixed y position for all rectangles, adjust this value as needed
  const fixedYPosition = 0; // For example, 100px from the top of the container
  rect.style.top = `${fixedYPosition}px`;

  // Set the color of the rectangle
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  rect.style.backgroundColor = colors[randomColorIndex];

  rect.style.height = '100vh';
  rect.style.width = `${rectWidth}px`; // Set the width of the rectangle

  const randomIndex = Math.floor(Math.random() * wordLinks.length);
  const { word, url } = wordLinks[randomIndex];

  // Create a link element and set its properties
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank'; // Open the link in a new tab
  link.classList.add('rect-text'); // Use the same styling class
  link.textContent = word;

  // Append the link to the rectangle, and the rectangle to the container
  rect.appendChild(link);
  container.appendChild(rect);
}

// Add click event listener to the container
container.addEventListener('click', createRectangle);
