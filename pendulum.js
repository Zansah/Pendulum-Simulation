const canvas = document.getElementById("pendulumCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let angle = Math.PI / 4; // Initial angle
let angleVelocity = 0;
let angleAcceleration = 0;
const gravity = 0.5;
const length = 200;
const origin = { x: canvas.width / 2, y: 50 };
const bobRadius = 20;

function drawPendulum() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate position of the bob
    const bobX = origin.x + length * Math.sin(angle);
    const bobY = origin.y + length * Math.cos(angle);

    // Draw the pendulum arm
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(bobX, bobY);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Draw the pendulum bob
    ctx.beginPath();
    ctx.arc(bobX, bobY, bobRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#ff5722";
    ctx.fill();
    ctx.closePath();
}

function updatePendulum() {
    // Pendulum physics
    angleAcceleration = (-1 * gravity / length) * Math.sin(angle);
    angleVelocity += angleAcceleration;
    angleVelocity *= 0.99; // Damping
    angle += angleVelocity;
}

function animate() {
    drawPendulum();
    updatePendulum();
    requestAnimationFrame(animate);
}

animate();
