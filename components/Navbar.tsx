import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-12  items-center ">
        <div className="col-span-2 sm:col-span-8 ">
          <Image src="/logo.png" width={159} height={41} alt="logo"></Image>
        </div>

        <div className="col-span-2 sm:col-span-4  justify-self-end ">
          <a className="font-bold">Signin</a>
          <button className="ml-6 bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded ">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
