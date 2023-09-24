import Image from "next/image";
const Banner = () => {
  return (
    <section className=" w-full mt-5 ">
      <Image
        width={1440}
        height={300}
        className="relative rounded-87xl w-full object-contain md:w-full"
        alt=""
        src="https://res.cloudinary.com/dkm0ap16q/image/upload/f_auto,q_auto,c_limit,w_1440/v1/globuy/ql4zta3s8umpuqvuplgy"
      />
    </section>
  );
};

export default Banner;
