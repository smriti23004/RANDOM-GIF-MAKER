import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col background relative overflow-hidden items-center">
      <h1 className="bg-white rounded-lg  absolute w-11/12 text-center mt-[40px] ml-[15px] px-10 py-2 text-3xl font-bold ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap gap-y-10 mt-[120px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
