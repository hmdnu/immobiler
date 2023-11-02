import { housetype1, housetype2 } from "../assets/images";
import { arrow } from "../assets/images";

export default function HouseType() {
  return (
    <div className="text-primary mt-[115px]">
      <h1 className="text-2xl text-center">
        TYPES OF <span className="font-bold">HOUSES</span>
      </h1>

      <div className="w-full">
        <div className="m-auto flex justify-center items-start gap-5 mt-[42px] w-fit border-t-[2px] border-[rgba(37,70,147,.2)] ">
          {/* card */}
          <div className="border-r-[2px] border-[rgba(37,70,147,.2)] py-5 pr-5 text-2xl relative">
            <img className="w-[500px]" src={housetype1} alt="house type 1" />
            <h1 className="mt-[20px]">
              MODERN <span className="font-bold">HOUSE</span>
            </h1>

            <div className="w-[100px] h-[100px] rounded-full bg-white border-[1px] border-[#254693] grid place-content-center shadow-md absolute right-10 bottom-5">
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="py-5 text-2xl relative">
            <img className="w-[500px]" src={housetype2} alt="house type 1" />
            <h1 className="mt-[20px]">
              SCANDINAVIAN <span className="font-bold">HOUSE</span>
            </h1>
            <div className="w-[100px] h-[100px] rounded-full bg-white border-[1px] border-[#254693] grid place-content-center shadow-md absolute right-5 bottom-5">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
