import Container from "@/components/ui/container";

type Props = {};

const Game = (props: Props) => {
  return (
    <main>
      <Container>
        <div className="h-screen flex justify-center items-center">
          <p className="text-5xl font-montserrat font-semibold">GAME PAGE</p>
        </div>
      </Container>
    </main>
  );
};

export default Game;
