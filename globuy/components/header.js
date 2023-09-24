"use client";

//  Import the utilities
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { extendTheme } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
 

// import cart from '../assets/Images/cart@2x.png'

//  Update the breakpoints as key-value pairs
const breakpoints = {
  base: "0px",
  sm: "420px",
  smd: "700px",
  md: "960px",
  lg: "1200px",
};

//  Extend the theme
const theme = extendTheme({ breakpoints });

const Header = () => {
  const router = useRouter()
  const [search, setSearch] = useState(""); //To get the value entered in search bar

  const handleSearch =(e)=>{
    setSearch(e.target.value)
    e.target.value === ''?
    router.push('/'):
    router.push(`/search?q=${e.target.value}`)

  }
  return (
    <header className=" mb-10  bg-mediumslateblue-200 w-full flex flex-row py-5 px-5 box-border items-center justify-end gap-[22px] text-left text-29xl text-white font-inter sm:pb-4 sm:px-0 sm:pt-0 sm:mb-0">
      <div className="flex-1 overflow-hidden flex flex-row items-center justify-between sm:flex-col ">
        <div>
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block sm:text-13xl ">
            globuy.lk
          </h1>
        </div>
        <div className="w-9/12 flex flex-row  items-center justify-between sm:w-full sm:px-4">
          <InputGroup className="bg-[transparent]" width="100%" w={{base: "75%" , md: "75%",lg:"40%"}}>
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              variant="filled"
              placeholder="search in globuy.lk"
              value={search}
              onChange={(e)=>handleSearch(e)}
            />
          </InputGroup>

          <Link href='/contact-us' className="relative inline-block font-bold text-13xl lg:text-7xl md:hidden">
            <p className="m-0">happiness hotline </p>
            <p className="m-0">+94 71 486 1684</p>
          </Link>
          <Image
            width={50}
            height={50}
            className="relative w-[50px] h-[50px] object-cover sm:w-[45px] sm:h-[45px]"
            alt="cart"
            src="/assets/Images/cart@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
