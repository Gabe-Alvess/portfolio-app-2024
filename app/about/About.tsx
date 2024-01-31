import Container from "@/components/ui/container";

type Props = {};

const About = (props: Props) => {
  return (
    <main>
      <Container>
        <div className="h-screen flex justify-center items-center">
          <p className="text-5xl font-montserrat font-semibold">ABOUT PAGE</p>
        </div>
      </Container>
    </main>
  );
};

export default About;
