import { styled } from '@mui/material/styles';
import { Rating } from "@mui/material";


const FlashCard = ({ cardImage, rating }) => {
  return (
    <div className="rounded-16xl overflow-hidden bg-white w-[250px] flex flex-col items-center justify-start text-left text-xs text-black font-inter lg:w-[200px] sm:w-[155px] sm:rounded-3xl">
      <img
        className="self-stretch max-w-full w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={cardImage}
      />
      <div className="self-stretch overflow-hidden flex flex-wrap items-end justify-center">
            <div className="self-stretch  overflow-hidden shrink-0 flex flex-col items-start justify-start pl-9 lg:pl-20">
              <b className="relative inline-block w-full shrink-0">
                BEGENE 7 Speed Light Weight Hand Mixer with..
              </b>
              <b className="relative text-4xl inline-block text-red-100 w-full shrink-0 lg:text-xl ">
                RS. 4000.00
              </b>
            <b className="text-mini inline-block w-full shrink-0 opacity-[0.5] lg:text-xs ">
              <span className="[text-decoration:line-through]">RS.6550.00</span>
              -30%
            </b>
            <div className='px-5'>
          <Rating name="read-only" size="small" value={rating} readOnly />
          </div>
          </div>
          

      </div>
    </div>
  );
};

export default FlashCard;
