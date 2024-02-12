import Image from "next/image";
import Container from "@/components/ui/container";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    "react.svg",
    "nextjs.svg",
    "angular.svg",
    "tailwind-css.svg",
    "shadcn-ui.png",
    "next-ui.png",
    "material-ui.svg",
    "bootstrap.svg",
    "jquery.svg",
    "json.svg",
    "typescript.svg",
    "javascript.svg",
    "css3.svg",
    "html5.svg",
    "java.svg",
    "spring.svg",
    "rest api.png",
    "maven.svg",
    "mysql.svg",
    "postman.svg",
    "hibernate.svg",
    "xml.svg",
    "git.svg",
    "docker.svg",
    "linode.svg",
    "nginx.svg",
    "linux.svg",
    "powershell.svg",
    "kotlin.svg",
    "android.svg",
  ];

  return (
    <main>
      <Container>
        <div className="h-screen flex flex-col justify-center">
          <h1 className="text-4xl font-semibold">SKILLS</h1>
          <div className="grid grid-cols-6">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="w-28 h-28 flex flex-col items-center justify-around mt-4 group transition-transform ease-in-out duration-300 hover:scale-110"
              >
                <Image
                  src={`/images/logos/${skill}`}
                  alt={`${skill.split(".")[0]} logo`}
                  width={80}
                  height={80}
                  priority
                  className="w-20 h-20 object-contain"
                />
                <span className="text-sm uppercase font-bold transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                  {skill.split(".")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Skills;
