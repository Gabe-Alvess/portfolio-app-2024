import Image from "next/image";
import Container from "@/components/ui/container";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="home-container">
          <div className="home-elements-container">
            <div className="home-text-container">
              <p>HI, I&#39;M GABRIEL.</p>
              <p>A CREATIVE</p>
              <p>AND DEDICATED</p>
              <p>FRONTEND DEVELOPER</p>
              <p>AIMING TO BE A</p>
              <p>FULL STACK DEVELOPER</p>
            </div>
            <div className="home-icon-btn-container">
              <button className="home-icon-btn group">
                <a href="cv/Gabriel_Alves_CV_EN.pdf" download>
                  <FileTextIcon className="w-10 h-10 mx-auto" />
                </a>
                <span className="home-icon-btn-text -right-2">RESUME</span>
              </button>
              <button className="home-icon-btn group">
                <a href="https://www.linkedin.com/in/gabriel-webdev/" target="_blank">
                  <LinkedInLogoIcon className="w-10 h-10 mx-auto" />
                </a>
                <span className="home-icon-btn-text -right-3">LINKEDIN</span>
              </button>
              <button className="home-icon-btn group">
                <a href="https://github.com/Gabe-Alvess" target="_blank">
                  <GitHubLogoIcon className="w-10 h-10 mx-auto" />
                </a>
                <span className="home-icon-btn-text -right-1">GITHUB</span>
              </button>
            </div>
          </div>
          <Image
            src={"/images/photo-bg-shadow.jpg"}
            alt="profile photo"
            width={450}
            height={450}
            priority
            className="home-profile-img"
          />
        </div>
      </Container>
    </main>
  );
}
