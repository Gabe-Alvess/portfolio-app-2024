import "./Game.css";
import { outsideBoard } from "@/components/SnakeGame/Board";
import { updateFood, drawFood } from "@/components/SnakeGame/Food";
import { updateSnake, drawSnake, SNAKE_SPEED, getSnakeHead, snakeHitTail } from "@/components/SnakeGame/Snake";
import Container from "@/components/ui/container";

type Props = {};

const Game = (props: Props) => {
  const gameBoard = document.getElementById("game-board") as HTMLElement;

  let lastRenderTime = 0;
  let gameOver = false;

  function gameInit(currentTime: number) {
    if (gameOver) {
      if (confirm("You lost the game! Press ok to restart.")) {
        location.reload();
      }
      return;
    }

    window.requestAnimationFrame(gameInit);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update();
    draw();
  }

  window.requestAnimationFrame(gameInit);

  function update() {
    updateSnake();
    updateFood();
    checkDeath();
  }

  function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
  }

  function checkDeath() {
    gameOver = outsideBoard(getSnakeHead()) || snakeHitTail();
  }

  return (
    <main>
      <Container>
        <div className="main">
          <h1 className="title">Snake Game</h1>
          <div className="wrapper">
            <div className="game-details">
              <div>
                Score: <span id="score">0</span>
              </div>
              <div>
                High Score: <span id="high-score"></span>
              </div>
            </div>
            <div id="game-board"></div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Game;
