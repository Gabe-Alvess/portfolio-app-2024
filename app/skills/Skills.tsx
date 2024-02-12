import Image from "next/image";
import Container from "@/components/ui/container";
import Link from "next/link";

type Props = {};

const Skills = (props: Props) => {
  type Skill = {
    logo: string;
    website: string;
  };

  const skills: Skill[] = [
    { logo: "react.svg", website: "react.dev" },
    { logo: "nextjs.svg", website: "nextjs.org" },
    { logo: "angular.svg", website: "angular.io" },
    { logo: "tailwind-css.svg", website: "tailwindcss.com" },
    { logo: "shadcn-ui.png", website: "ui.shadcn.com" },
    { logo: "next-ui.png", website: "nextui.org" },
    { logo: "material-ui.svg", website: "mui.com" },
    { logo: "bootstrap.svg", website: "getbootstrap.com" },
    { logo: "jquery.svg", website: "jquery.com" },
    { logo: "json.svg", website: "json.org" },
    { logo: "typescript.svg", website: "typescriptlang.org" },
    { logo: "javascript.svg", website: "developer.mozilla.org/en-US/docs/Web/javascript" },
    { logo: "css3.svg", website: "developer.mozilla.org/en-US/docs/Web/CSS" },
    { logo: "html5.svg", website: "developer.mozilla.org/en-US/docs/Web/HTML" },
    { logo: "java.svg", website: "dev.java" },
    { logo: "spring.svg", website: "spring.io" },
    { logo: "rest api.png", website: "ibm.com/topics/rest-apis" },
    { logo: "maven.svg", website: "maven.apache.org" },
    { logo: "mysql.svg", website: "mysql.com" },
    { logo: "postman.svg", website: "postman.com" },
    { logo: "hibernate.svg", website: "hibernate.org" },
    { logo: "xml.svg", website: "developer.mozilla.org/en-US/docs/Web/XML" },
    { logo: "git.svg", website: "git-scm.com" },
    { logo: "docker.svg", website: "docker.com" },
    { logo: "linode.svg", website: "linode.com" },
    { logo: "nginx.svg", website: "nginx.org/en/" },
    { logo: "linux.svg", website: "docs.kernel.org" },
    { logo: "powershell.svg", website: "learn.microsoft.com/en-us/powershell/" },
    { logo: "kotlin.svg", website: "kotlinlang.org" },
    { logo: "android.svg", website: "developer.android.com" },
  ];

  return (
    <main>
      <Container>
        <div className="h-screen flex flex-col justify-center">
          <h1 className="text-4xl font-semibold">SKILLS</h1>
          <div className="grid grid-cols-6">
            {skills.map((skill, index) => (
              <Link
                key={index}
                href={`https://${skill.website}`}
                target="_blank"
                className="w-28 h-28 flex flex-col items-center justify-around mt-4 group transition-transform ease-in-out duration-300 hover:scale-110"
              >
                <Image
                  src={`/images/logos/${skill.logo}`}
                  alt={`${skill.logo.split(".")[0]} logo`}
                  width={80}
                  height={80}
                  priority
                  className="w-20 h-20 object-contain"
                />
                <span className="text-sm uppercase font-semibold text-nowrap transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                  {skill.logo.split(".")[0] === "kotlin"
                    ? "koltin (studying)"
                    : skill.logo.split(".")[0] === "android"
                    ? "android (studying)"
                    : skill.logo.split(".")[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Skills;
