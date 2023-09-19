export default function Footer() {
  return (
    <footer className=" flex w-full p-10 bg-slateblue flex-col justify-center items-center">
      
        <div className="w-full flex justify-between items-start flex-wrap text-left smd:flex-col smd:justify-center smd:gap-5">
          <div className="flex flex-col ">
            <div>
              <h1 className="m-0 relative text-29xl text-white font-bold font-inherit inline-block sm:text-13xl ">
                globuy.lk
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-xl text-white mb-4">Links</h4>
            <p className="text-mini text-white">Overons</p>
            <p className="text-mini text-white">Social Media</p>
            <p className="text-mini text-white">Counters</p>
            <p className="text-mini text-white">Contact</p>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-xl text-white mb-4">Company</h4>
            <p className="text-mini text-white">Terms & Conditions</p>
            <p className="text-mini text-white">Privacy Policy</p>
            <p className="text-mini text-white">Contact</p>
          </div>
          <div className="flex flex-col justify-start">
            <h4 className="text-xl text-white mb-4">Get in touch</h4>
            <p className="text-mini text-white">
              Crechterwoord K12 182 DK Alknjkcb
            </p>
            <p className="text-mini text-white">085-132567</p>
            <p className="text-mini text-white">info@payme.net</p>
          </div>
        </div>
        <div className="mt-10 text-white">
          <p>Copyright © 2023 All Rights Reserved</p>
        </div>

    </footer>
  );
}
