import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center bg-orange-200 ">
      <div className="flex flex-col">
        <h1 className="flex justify-center items-center content-center bg-slate-500 my-4 font-bold font-sans text-2xl">
          Welcome!
        </h1>
        <h2 className="flex justify-center items-center content-center bg-slate-500 my-4 font-bold font-sans text-2xl">
          Here is the latest information about a new token and its price
        </h2>
      </div>
      <div className=""></div>
    </main>
  );
}
