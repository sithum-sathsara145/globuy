import CategoryCard from "./category-card";

const Categories = () => {
  return (
    <section className="mt-3 flex flex-row items-stretch justify-stretch text-left text-5xl text-white font-inter md:flex-col md:gap-[0px] md:items-start md:justify-start">
      {/* vertical navbar */}
      <div className="bg-mediumslateblue-100 w-[25%] flex flex-col py-3 px-3 box-border items-end justify-start md:hidden">
        <span className="m-0 self-stretch relative text-2xl font-bold font-inherit">
          <p>Clothing</p>
          <p>Electronics</p>
          <p>Food / Restaurants</p>
          <p>Fruit / Fruit Baskets</p>
          <p>Veg / Veg Baskets</p>
          <p>Gift Sets</p>
          <p>Grocery Items</p>
          <p>Jewelry / Watches</p>
          <p>Phones/Tabs</p>
          <p>Personalized Gifts</p>
          <p>Perfumes / Fragrances</p>
          <p>Bags / Title / Shoes</p>
          <p>Cosmetics</p>
        </span>
      </div>
      {/* catogories */}
      <div className="bg-gainsboro-100 w-[75%] flex  py-10 px-16  box-border items-start justify-end gap-[51px] text-black md:w-full md:p-1">
        <div className="self-stretch flex flex-wrap gap-5 items-center justify-center   ">
            {/* TODO : map category card to take data from json */}
            <CategoryCard cardImage="/assets/Images/clothing.png" Title="Title" />
            <CategoryCard cardImage="/assets/Images/cosmetics.png" Title="Title" />
            <CategoryCard cardImage="/assets/Images/cosmetics.png" Title="beauty" />
            <CategoryCard cardImage="/assets/Images/onlinepay.png" Title="online pay" />
            <CategoryCard cardImage="/assets/Images/onlinepay.png" Title="Title" />
            <CategoryCard cardImage="/assets/Images/onlinepay.png" Title="Title" />
            <CategoryCard cardImage="/assets/Images/onlinepay.png" Title="beauty" />
            <CategoryCard cardImage="/assets/Images/onlinepay.png" Title="online pay" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
