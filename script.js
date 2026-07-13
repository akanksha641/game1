let score = 0;

const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");

function moveTarget() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    target.style.left = x + "px";
    target.style.top = y + "px";
}

target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

moveTarget();
