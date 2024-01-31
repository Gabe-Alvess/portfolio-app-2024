import Image from "next/image";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="h-screen flex justify-center items-center">
          <p className="text-5xl font-montserrat font-semibold">HOME PAGE</p>
        </div>
      </Container>
    </main>
  );
}
