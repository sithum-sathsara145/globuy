const CategoryCard = ({ cardImage, Title }) => {
  return (
    <div className="rounded-3xl bg-white w-[203px] h-[203px] flex flex-col py-[11px] px-[26px] box-border items-center justify-start gap-[5px] text-left text-5xl text-black font-inter sm:w-[120px] sm:h-[120px] sm:py-[5px] sm:text-xs">
      <img
        className="relative rounded-[50%] w-[150px] h-[150px] object-cover sm:w-[90px] sm:h-[90px]"
        alt=""
        src={cardImage}
      />
      <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block flex-wrap shrink-0">
        {Title}
      </h1>
    </div>
  );
};

export default CategoryCard;
