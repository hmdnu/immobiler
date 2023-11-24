import { about } from "../constant";

export default function AboutUs() {
  return (
    <div id="aboutus" className="text-primary">
      <div className="py-16">
        <h1 className="text-center text-2xl mb-8">
          WHAT IS <span className="font-bold">IMMOBILIER</span>
        </h1>

        <p className="bg-gradient-to-t from-[rgba(15,15,15,0.30)] to-primary bg-clip-text text-transparent paragraph indent-28 leading-10 text-justify">
          {about.text.toUpperCase()}
        </p>
      </div>

      {/* luxury bg */}
      <div className="mt-28 w-full h-[38rem] bg-no-repeat bg-cover object-bottom bg-luxury relative">
        <h1 className="text-[10.5rem] text-primary font-black left-2/4 translate-x-[-50%] translate-y-[-50%] absolute">
          LUXURY
        </h1>
        <div className="w-full h-[38rem] bg-no-repeat bg-cover object-bottom bg-luxury relative">
          <h1 className="text-[10.5rem] text-primary font-black left-2/4 translate-x-[-50%] translate-y-[-50%] absolute text-transparent stroke-luxury">
            LUXURY
          </h1>
        </div>
      </div>
    </div>
  );
}
