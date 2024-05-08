import "./Game.css";
import Container from "@/components/ui/container";

type Props = {};

const Game = (props: Props) => {
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
