import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { house1, house2, house3 } from "../assets/images";

import { imageCarousel } from "../constant";

export default function Houses() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="py-16 w-full">
      <h1 className="text-center text-2xl mb-8">
        OUR <span className="font-bold">PROPERTY</span>
      </h1>

      <Carousel
        swipeable={true}
        draggable={true}
        minimumTouchDrag={100}
        partialVisible={true}
        containerClass="container-carousel"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {imageCarousel.map((img, i) => (
          <div className="pr-5" key={i}>
            <img draggable={false} src={img.img} alt="image" />
          </div>
        ))}
      </Carousel>

      <div className="w-full flex justify-center mt-[35px]">
        <button className="px-6 py-1 border text-base border-black">MORE</button>
      </div>
    </div>
  );
}
