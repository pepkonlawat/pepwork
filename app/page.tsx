import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-screen h-screen justify-between pt-4 px-12 sm:px-16 md:px-12 overflow-hidden">
      <Navbar />
      <div className="main flex mt-12 items-center justify-center mb-auto">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Hello, </h1>
          <h1 className="text-3xl font-bold">I'm Pep Konlawat Khathaphet</h1>
          <p className="text-sm font-light">
            As a recent Computer Engineering graduate from Mahidol University,
            I'm passionate about web development and software engineering.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
