// puts the starfield in a container to prevent it from interfering with the rest of
const starfieldContainer = document.createElement('div');
starfieldContainer.classList.add('starfield-container');
document.body.appendChild(starfieldContainer);

// creates 50 stars with random positions and animation durations
for (let i = 0; i < 50; i++) {
  const starfield = document.createElement('div');
  starfield.classList.add('starfield');

// the random and vh units ensure the stars are distributed across the screen and move at different speeds
  starfield.style.left = Math.random() * 100 + 'vw';
  
  // generates random time 
  starfield.style.animationDuration = (5 + Math.random() * 5) + 's';
  // generates random delay to create a more natural effect
  starfield.style.animationDelay = (Math.random() * 5) + 's';
  starfieldContainer.appendChild(starfield);
}




const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Draw one lightning bolt
function drawLightning(x, y, segments = 20) {
  let sx = x;
  let sy = y;

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;

  ctx.moveTo(sx, sy);

  for (let i = 0; i < segments; i++) {
    const ex = sx + (Math.random() - 0.5) * 40;
    const ey = sy + Math.random() * 30;

    ctx.lineTo(ex, ey);

    //  small branch option
    if (Math.random() < 0.2) {
      ctx.moveTo(ex, ey);
      ctx.lineTo(
        ex + (Math.random() - 0.5) * 30,
        ey + Math.random() * 20
      );
    }

    sx = ex;
    sy = ey;
  }

  ctx.stroke();
}

// Animation loop
function animate() {
  // clear canvas with transparency to let background image show through
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // random lightning strike
  if (Math.random() < 0.02) {
    // screen flash
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawLightning(
      Math.random() * canvas.width,
      0,
      Math.random() * 30 + 10
    );
  }

  requestAnimationFrame(animate);
}

animate();




const loveSection = document.querySelector(".love");
const desireSection = document.querySelector(".desire");

if (loveSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loveSection.classList.add("is-active");
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(loveSection);
}

if (desireSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        desireSection.classList.add("is-active");
      }
    },
    { threshold: 0.5 },
  );

  observer.observe(desireSection);
}
