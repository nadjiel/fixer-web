import { IoHeartCircle } from "react-icons/io5";

export function ServiceItem({ data }) {
  return (
    <div className="bg-[#EAF1F9] rounded-xl py-8 px-6 w-full flex-row align-center gap-3">
      <IoHeartCircle color="#B3261E" size={32} />
      <h1 className="text-xl text-[#B3261E]">{data}</h1>
    </div>
  );
}