import FlashCard from "./flash-card";
import { products } from "@/utils/data";

const FlashSale = () => {
  return (
    <section className=" bg-gainsboro-200 w-full flex text-left text-xs text-black font-inter p-5 gap-5 md:hidden">
      <div className=" w-[30%] overflow-hidden flex flex-col py-[19px] px-0 box-border items-center justify-end text-center text-17xl text-white">
        <img src="/assets/Images/flashsaleImg.png" alt=""  className="w-[100%]"/>
        <div className="bg-red-100 w-[438px] flex flex-col py-2.5 px-[3px] box-border items-center justify-start">
          <div className="w-[310px] overflow-hidden flex flex-col items-start justify-center">
            <h2 className="m-0 self-stretch relative text-clip font-bold font-inherit">
              On Sale Now
            </h2>
          </div>
          <div className="self-stretch overflow-hidden flex flex-wrap items-start justify-center text-left">
            <b className="self-stretch relative text-2xl lg:text-xl "> Ending in 24 : 00 :00</b>
          </div>
        </div>
      </div>
      <div className=" w-[70%] overflow-hidden flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-wrap gap-2 items-center justify-center">
              {products.slice(0,8).map((product)=>(
                <FlashCard source={product}/>
              ))}
          </div>
      </div>
    </section>
  );
};

export default FlashSale;
