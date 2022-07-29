import { IoMdFitness } from "react-icons/io";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-pink-600 grid grid-rows-1 gap-2 pt-8 text-white md:grid-cols-4 md:gap-4 md:pb-32 md:font-extralight">
      <div className="bg-pink-600 w-full text-center text-xl py-6 ">
        <div className=" flex flex-col">
          <IoMdFitness className="mt-2 text-center w-full text-4xl" />
          <h6 className="text-4xl mb-2">Fitlab</h6>
        </div>
        <div className="py-5">
          <p className=" px-6 text-justify text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="flex flex-row justify-around pt-4 text-5xl">
          <TbBrandInstagram />
          <TbBrandTwitter />
          <TbBrandFacebook />
        </div>
      </div>
      <div className="bg-pink-600 w-full text-center text-xl py-3 ">
        <h4 className="text-3xl py-2">Links</h4>
        <li className="list-none py-4">Overons</li>
        <li className="list-none py-4">Social Media</li>
        <li className="list-none py-4">Counters</li>
        <li className="list-none py-4">Contact</li>
      </div>
      <div className="bg-pink-600 w-full text-center text-xl py-3 ">
        <h4 className="text-3xl py-2">Company</h4>
        <li className="list-none py-4">Terms & Conditions</li>
        <li className="list-none py-4">Privacy Policy</li>
        <li className="list-none py-4">Careers</li>
        <li className="list-none py-4">Our Story</li>
      </div>
      <div className="bg-pink-600 w-full text-center text-xl pt-3 ">
        <h4 className="text-3xl py-1">Get in Touch</h4>
        <address className="list-none py-4">
          1320 S Lincoln Ave <br />
          Monterey Park CA 91755 <br />
        </address>
        <address>
          <a href="tel:+13115552368">(311) 555-2368</a> <br />
          <a href="mailto:katiuskaalicea@gmail.com">katiuskaalicea@gmail.com</a>
        </address>
      </div>
    </div>
  );
};

export default Footer;
