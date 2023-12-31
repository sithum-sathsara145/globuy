'use client'
import { useRouter } from 'next/navigation';
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Image from "next/image";

const FlashCard = ({ source }) => {
  const router = useRouter()
  const handlClick= ()=>{
    router.push(`/products?id=${source.id}`)
  }
  return (
    <div className="rounded-16xl overflow-hidden bg-white w-[200px] flex flex-col items-center justify-start text-left text-xs text-black font-inter lg:w-[175px] sm:w-[155px] sm:rounded-3xl" onClick={handlClick}>
      <Image
        width={200}
        height={200}
        className="self-stretch max-w-full w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={source?.images[0].src}
      />
      <div className="self-stretch w-full overflow-hidden flex flex-wrap items-end justify-start">
        <div className="self-stretch w-full overflow-hidden shrink-0 flex flex-col items-start justify-start pl-1">
          <b className="relative inline-block w-full shrink-0">
            {source?.title.slice(0,30)}
          </b>
          <b className="relative text-4xl inline-block text-red-100 w-full shrink-0 lg:text-xl ">
            {`Rs. ${source?.price.sale}`}
          </b>
          <b className="text-mini inline-block w-full shrink-0 opacity-[0.5] lg:text-xs ">
            <span className="[text-decoration:line-through]">{`Rs. ${source?.price.market}`}</span>
            {`  ${
              (((source?.price.market - source?.price.sale) /
                source?.price.market) *
              100).toFixed(0)
            } %`}
          </b>
          <div className="px-5">
            <Rating
              name="read-only"
              size="small"
              value={source?.rating}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
