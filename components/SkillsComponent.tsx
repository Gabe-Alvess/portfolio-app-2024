import Link from "next/link";
import Image from "next/image";

type Props = {};

const SkillsComponent = (props: Props) => {
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

  const logoName = (index: number) => {
    let name = skills[index].logo.split(".")[0];

    if (name === "kotlin" || name === "android") {
      return (name += " (studying)");
    }

    return name;
  };

  return (
    <>
      {skills.map((skill, index) => (
        <Link key={index} href={`https://${skill.website}`} target="_blank" className="skill-link group">
          <Image
            src={`/images/logos/${skill.logo}`}
            alt={`${logoName(index)} logo`}
            width={80}
            height={80}
            priority
            className="skill-logo"
          />
          <span className="skill-name">{logoName(index)}</span>
        </Link>
      ))}
    </>
  );
};

export default SkillsComponent;
