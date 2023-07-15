import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-12  items-center ">
        <div className="flex  col-span-2 sm:col-span-8 font-black text-xl ">
          <h1 className="">PEP</h1>
          <h1 className="text-white">KONLAWAT</h1>
          {/* <Image src="/logo.png" width={159} height={41} alt="logo"></Image> */}
        </div>

        <div className="col-span-2 sm:col-span-4  justify-self-end ">
          <button className="ml-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded ">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
