import { onSnake, expandSnake } from "./Snake";
import { randomBoardPosition } from "./Board";
import { updateScoreBoards } from "./Score";

const EXPANSION_RATE = 1;

let food = getRandomFoodPosition();

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
    updateScoreBoards();
  }
}

export function drawFood(gameBoard: HTMLElement): void {
  const foodElement = document.createElement("div");

  foodElement.classList.add("food");

  foodElement.style.gridArea = `${food.y} / ${food.x}`;

  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;

  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomBoardPosition();
  }

  return newFoodPosition;
}