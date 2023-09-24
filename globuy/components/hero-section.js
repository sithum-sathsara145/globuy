import { bannerImages } from "@/utils/data";
import ImageCarousel from "./reusable/ImageCarousel";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" w-full  flex flex-row py-5 px-5 items-center justify-between text-left text-5xl text-white font-inter sm:mt-0  ">
      {/* Image Carousel */}
      <ImageCarousel
        className="relative rounded-14xl w-8/12 h-[330px] object-contain md:w-full"
        src={bannerImages}
      />
      <div className="rounded-48xl [background:linear-gradient(180deg,_#0500ff,_#db00ff)] w-[30%] flex flex-col py-10 px-7 box-border items-center justify-center gap-[24px] lg:w-[30%] md:hidden ">
        <Image
          width={140}
          height={140}
          className="relative w-[168px] h-[137px] overflow-hidden shrink-0"
          alt=""
          src="/assets/Images/logo.svg"
        />
        {/* Profile card */}
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[47px]">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
            <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
              Welcome to Globuy.lk
            </h2>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
            <div className="self-stretch flex flex-row items-center justify-between">
              <button className="cursor-pointer [border:none] p-0 bg-mediumslateblue-100 rounded-4xl w-[40%] h-[54px] flex flex-col items-center justify-center ">
                <b className="relative text-xl inline-block font-inter text-white text-left ">
                  Login
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-mediumslateblue-100 rounded-4xl w-[40%] h-[54px] flex flex-col items-center justify-center ">
                <b className="relative text-xl inline-block font-inter text-white text-left ">
                  Sign up
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
