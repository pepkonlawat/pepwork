"use client";
import Image from "next/image";
export default function Navbar() {
  const downloadCV = (event: React.MouseEvent<HTMLElement>) => {
    const url = "http://localhost:3000/KonlawatCV2023.pdf";
    const fileName = url.split("/").pop()!;
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-12  items-center ">
        <div className="flex  col-span-2 sm:col-span-8 font-black text-xl ">
          <h1 className="">PEP</h1>
          <h1 className="text-white">KONLAWAT</h1>
        </div>

        <div className="col-span-2 sm:col-span-4  justify-self-end ">
          <button
            onClick={downloadCV}
            className="ml-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded "
          >
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
