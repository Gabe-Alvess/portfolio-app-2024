import Image from "next/image";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="h-screen flex flex-col justify-evenly items-center sm:flex-row">
          <div className="text-3xl text-center sm:text-left font-bold sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
            <p>HI, I&#39;M GABRIEL.</p>
            <p>A CREATIVE</p>
            <p>AND DEDICATED</p>
            <p>FRONTEND DEVELOPER</p>
            <p>AIMING TO BE A</p>
            <p>FULL STACK DEVELOPER</p>
          </div>
          <Image
            src={"/photo-bg-shadow.jpg"}
            alt="profile photo"
            width={450}
            height={450}
            priority
            className="rounded-full w-[300px] h-[300px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px]"
          />
        </div>
      </Container>
    </main>
  );
}
