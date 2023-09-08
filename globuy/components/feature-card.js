const FeatureCard = ({ cardImage, discountPrice, totalPrice }) => {
  return (
    <div className="rounded-mini bg-white w-[254px] flex flex-col py-[7px] px-[20px] box-border items-center justify-start gap-[6px] text-left text-9xl text-white font-inter  smd:w-[200px]">
      <div className="self-stretch  overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <img
          className="relative w-[200px] h-[200px] object-cover smd:w-[150px] smd:h-[150px] "
          alt=""
          src={cardImage}
        />
        <div className="w-[180px] overflow-hidden flex flex-col items-start justify-center mt-[-20px] smd:w-[150px]">
          <div className="rounded-2xl [background:linear-gradient(90deg,_#ff0000,_#830909_99.99%,_#ff0000)] w-[180px] flex flex-col items-center justify-center z-10 smd:w-[150px]">
            <b className="relative inline-block w-full h-[39px] shrink-0">
              {discountPrice}
            </b>
          </div>
        </div>
      </div>
      <b className="relative text-xl [text-decoration:line-through] inline-block text-black w-[117px] h-[25px] shrink-0 opacity-[0.5]">
        {totalPrice}
      </b>
    </div>
  );
};

export default FeatureCard;
