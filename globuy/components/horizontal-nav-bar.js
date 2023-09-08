const HorizontalNavBar = () => {
  return (
    <div className="w-full h-8 bg-white flex flex-row items-center justify-stretch gap-0  text-left text-5xl text-white font-inter  md:flex-row md:gap-[0px] md:items-start md:justify-start md:hidden">
      <div className="bg-red-100 w-[25%] flex flex-row py-3 px-3 box-border items-center justify-between ">
        <h2 className="relative text-inherit font-bold font-inherit inline-block ">
          Our Top Categories
        </h2>
      </div>
      <div className="bg-dodgerblue w-[75%] flex flex-row py-3 px-3 box-border items-center justify-between lg:w-[72%]">

          <h2 className="relative text-inherit font-bold font-inherit inline-block ">
            Best seller
          </h2>
          <h2 className="relative text-inherit font-bold font-inherit inline-block ">
            onsale
          </h2>
          <h2 className="relative text-inherit font-bold font-inherit inline-block ">
            Unique Selections
          </h2>
          <h2 className="relative text-inherit font-bold font-inherit inline-block ">
            For Events
          </h2>

      </div>
    </div>
  );
};

export default HorizontalNavBar;
