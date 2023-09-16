import FlashCard from "./flash-card";

const JustForYou = () => {
  return (
    <section className=" bg-gainsboro-200 w-full flex flex-col py-[13px] px-0 box-border items-center justify-start gap-[102px] text-left text-21xl text-black font-inter">
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[22px]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block w-[382px] h-[78px] shrink-0">
            Just For You
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
          <div className="self-stretch flex flex-col py-0 px-[22px] items-center justify-center gap-[32px]">
            <div className="self-stretch flex flex-wrap gap-5 items-center justify-center">
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
              <FlashCard cardImage="/assets/Images/beater.png" rating={4} />
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-mediumslateblue-100 rounded-4xl w-[40%] h-[54px] flex flex-col items-center justify-center ">
        <b className="relative text-xl inline-block font-inter text-white text-left ">
          Load more
        </b>
      </button>
    </section>
  );
};

export default JustForYou;
