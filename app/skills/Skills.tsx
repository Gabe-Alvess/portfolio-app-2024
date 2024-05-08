import Container from "@/components/ui/container";
import SkillsComponent from "@/components/SkillsComponent";

type Props = {};

const Skills = (props: Props) => {
  return (
    <main>
      <Container>
        <div className="h-screen flex flex-col justify-center">
          <h1 className="text-2xl pl-4 lg:text-3xl lg:ml-8 2xl:text-4xl 2xl:ml-0  font-semibold">SKILLS</h1>
          <div className="grid grid-cols-5 lg:grid-cols-6">
            <SkillsComponent />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Skills;
