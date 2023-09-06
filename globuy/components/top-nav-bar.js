const TopNavBar = () => {
  return (
    <nav className=" bg-slateblue w-full flex flex-col justify-center items-center py-2 px-5  box-border  text-xs text-white font-inter sm:hidden ">
      <div className="self-stretch px-5 flex flex-row items-center justify-between lg:w-auto lg:gap-[62px] md:w-auto md:[align-self:unset] md:gap-[40px] smd:gap-[25px] smd:text-xxs ">
        <b className="relative inline-block">Help & support</b>
        <b className="relative inline-block">Become seller</b>
        <b className="relative inline-block">Buyer Protection</b>
        <b className="relative inline-block">order status </b>
        <b className="relative inline-block">App</b>
        <b className="relative inline-block">Brands</b>
        <b className="relative inline-block">Login</b>
      </div>
    </nav>
  );
};

export default TopNavBar;
