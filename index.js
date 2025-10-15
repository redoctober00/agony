// trail 
let mouseX = 0;
let mouseY = 0;
const trails = [];

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = mouseX + "px";
  trail.style.top = mouseY + "px";
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.style.opacity = "0.7";
    trail.style.animation = "fadeOut 0.5s ease-out forwards";
  }, 10);

  setTimeout(() => {
    document.body.removeChild(trail);
  }, 500);
});

// glitch effects
setInterval(() => {
  const elements = document.querySelectorAll("h1, h2");
  const randomElement = elements[Math.floor(Math.random() * elements.length)];
  randomElement.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
  setTimeout(() => {
    randomElement.style.transform = "translateX(0)";
  }, 100);
}, 3000);

// fadeout animation
const style = document.createElement("style");
style.textContent = `
            @keyframes fadeOut {
                to { 
                    opacity: 0; 
                    transform: scale(0.5); 
                }
            }
        `;
document.head.appendChild(style);
