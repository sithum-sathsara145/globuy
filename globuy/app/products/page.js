'use client'
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Rating } from "@mui/material";
import { products } from "@/utils/data";
import ImageCarousel from "@/components/reusable/ImageCarousel";
import { useSearchParams ,useRouter } from 'next/navigation'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  
export default function product() {
  const SearchParams = useSearchParams();
  const router = useRouter();
  const id = SearchParams.get('id');
  {/*prevents false input parameters and redirect to 404 page*/ }
  if (id === null || id > products.length){
    router.push('/error')
    stop()
  }
  {/* This is to get product arr index (since database isn't created) */}
  var newId = 1
  if (id <= 0 || id > products.length){
    newId = 0;
  }else{
    newId = id - 1;
  }
  const product = products[newId]
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState();
  return (
    <div className="bg-white">
      <div className="pt-6">

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl px-6 ">
          <ImageCarousel src={product?.images} className="relative rounded-14xl w-full h-[330px] object-cover md:w-full"/>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 px-6 ">
          <div className="">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-3xl">
              {product?.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 ">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {`Rs. ${product?.price.sale}`}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="">Reviews</h3>
              <Rating
              name="read-only"
              size="medium"
              value={product?.rating}
              readOnly
            />
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product?.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          }
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-mediumslateblue-200 hover:text-slateblue"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-mediumslateblue-200 px-8 py-3 text-base font-medium text-white hover:bg-slateblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-mediumslateblue-200 px-8 py-3 text-base font-medium text-white hover:bg-slateblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Buy Now
              </button>
            </form>
          </div>

          <div className="py-10  ">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product?.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product?.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
