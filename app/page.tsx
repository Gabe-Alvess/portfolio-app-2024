import Image from "next/image";
import Container from "@/components/ui/container";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="h-screen flex flex-col justify-center gap-12 items-center sm:flex-row">
          <div className="flex flex-col items-center gap-12">
            <div className="text-2xl text-center sm:text-left font-bold sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              <p>HI, I&#39;M GABRIEL.</p>
              <p>A CREATIVE</p>
              <p>AND DEDICATED</p>
              <p>FRONTEND DEVELOPER</p>
              <p>AIMING TO BE A</p>
              <p>FULL STACK DEVELOPER</p>
            </div>
            <div className="flex gap-10">
              <button className="iconBtn group">
                <a href="cv/Gabriel_Alves_CV_EN.pdf" download>
                  <FileTextIcon className="w-10 h-10 mx-auto" />
                </a>
                <span className="iconBtnText -right-2">RESUME</span>
              </button>
              <button className="iconBtn group">
                <a href="https://www.linkedin.com/in/gabriel-webdev/" target="_blank">
                  <LinkedInLogoIcon className="w-10 h-10 mx-auto" />
                </a>
                <span className="iconBtnText -right-3">LINKEDIN</span>
              </button>
              <button className="iconBtn group">
                <a href="https://github.com/Gabe-Alvess" target="_blank">
                  <GitHubLogoIcon className="w-10 h-10 mx-auto" />
                </a>
                <span className="iconBtnText -right-1">GITHUB</span>
              </button>
            </div>
          </div>
          <Image
            src={"/images/photo-bg-shadow.jpg"}
            alt="profile photo"
            width={450}
            height={450}
            priority
            className="rounded-full w-[250px] h-[250px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px]"
          />
        </div>
      </Container>
    </main>
  );
}
