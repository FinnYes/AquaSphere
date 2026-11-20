
const canvas = document.getElementById("ocean");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw() {
    const gradient = ctx.createLinearGradient(
        0, 0, 0, canvas.height
    );

    gradient.addColorStop(0, "#54dff0");
    gradient.addColorStop(0.5, "#078fbd");
    gradient.addColorStop(1, "#003f78");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);

resize();
draw();
