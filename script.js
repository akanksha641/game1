const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{ x: 200, y: 200 }];
let food = { x: 100, y: 100 };
let dx = 20;
let dy = 0;
let score = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.key === "ArrowUp") {
        dx = 0;
        dy = -20;
    }
    if (event.key === "ArrowDown") {
        dx = 0;
        dy = 20;
    }
    if (event.key === "ArrowLeft") {
        dx = -20;
        dy = 0;
    }
    if (event.key === "ArrowRight") {
        dx = 20;
        dy = 0;
    }
}

function drawGame() {
    ctx.clearRect(0, 0, 400, 400);

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);

    ctx.fillStyle = "green";
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, 20, 20);
    });

    let head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;

        food = {
            x: Math.floor(Math.random() * 20) * 20,
            y: Math.floor(Math.random() * 20) * 20
        };
    } else {
        snake.pop();
    }

    if (
        head.x < 0 ||
        head.x >= 400 ||
        head.y < 0 ||
        head.y >= 400
    ) {
        alert("Game Over! Score: " + score);
        location.reload();
    }
}

setInterval(drawGame, 150);
