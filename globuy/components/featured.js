import FeatureCard from "./feature-card";

const Featured = () => {
  return (
     // featured products section
    <section className=" rounded-35xl blue-gradient w-full flex flex-row pt-[37px] px-[26px] pb-[25px] box-border items-start justify-between text-center text-9xl text-white font-inter md:flex-col md:text-4xl sm:hidden">
      <div className="  w-[15%] overflow-hidden shrink-0 flex flex-col items-center justify-end md:w-full">
        <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
          <p className="[margin-block-start:0] [margin-block-end:15px]">
            Your fave shopping guide
          </p>
          <p className="m-0">Check out the latest new deals</p>
        </h2>
      </div>
      <div className="w-[85%]  flex flex-wrap items-center justify-center gap-5 text-left text-xl text-black md:w-full md:gap-[20px]  sm:flex-col sm:gap-[20px]  smd:gap-1">
        {/* TODO : map category card to take data from json */}
        <FeatureCard
          cardImage="/assets/Images/keytag.png"
          discountPrice="RS.350.00"
          totalPrice="RS.550.00"
        />
        <FeatureCard
          cardImage="/assets/Images/bottle.png"
          discountPrice="RS.950.00"
          totalPrice="RS.1450.00"
        />
        <FeatureCard
          cardImage="/assets/Images/hairdrier.png"
          discountPrice="RS.1650.00"
          totalPrice="RS.2550.00"
        />
        <FeatureCard
          cardImage="/assets/Images/headphones.png"
          discountPrice="RS.1350.00"
          totalPrice="RS.2550.00"
        />
      </div>
    </section>
  );
};

export default Featured;
