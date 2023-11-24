import { navbar, footer } from "../constant";
import { arrow } from "../assets/images";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-footer bg-cover bg-center text-white h-[490px] mt-[115px] flex items-center justify-center"
    >
      <div className="w-[80%] flex justify-between ">
        {/* nav */}
        <div>
          <h1 className="text-2xl font-black mb-[35px]">IMMOBILIER</h1>

          <div>
            {navbar.map((link, i) => (
              <div className="mb-[20px]" key={i}>
                <a className="text-lg" href="#">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* whats it? */}
        <div className="flex items-center justify-center gap-16">
          <div>
            <h1 className="text-2xl font-black mb-[27px]">WHAT IS IT ?</h1>
            <p className="text-base mb-1 font-medium w-[330px] text-justify">{footer.text1.toUpperCase()}</p>
            <p className="text-base font-medium w-[330px] text-justify">{footer.text2.toUpperCase()}</p>
          </div>

          <div className="text-2xl font-black bg-house-footer fill w-[340px] h-[353px] bg-cover bg-no-repeat grid place-content-center relative">
            CONTACT US
            <div className="w-[100px] h-[100px] rounded-full bg-white border-[1px] border-[#254693] grid place-content-center shadow-md absolute -right-12 bottom-[36%] cursor-pointer">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
