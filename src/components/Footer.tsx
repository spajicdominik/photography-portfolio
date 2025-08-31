import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-black flex flex-col items-center">
      <div className="flex justify-between w-1/3 mt-4">
        <a
          href="https://instagram.com"
          className="text-white hover:text-white"
        >
          <FaInstagram size={32}/>
        </a>

        <a
          href="https://facebook.com"
          className="text-white hover:text-white"
        >
          <FaFacebook size={32}/>
        </a>

        <a
          href="https://whatsapp.com"
          className="text-white hover:text-white"
        >
          <FaWhatsapp size={32}/>
        </a>
      </div>

      <div className="flex justify-between mt-6">
        <div className="mr-3 flex items-center justify-center">
            <p className="text-xs ">HOME</p>
        </div>
        <div className="mr-3 flex items-center justify-center">
            <p className="text-xs">PORTFOLIO</p>
        </div>
        <div className="mr-3 flex items-center justify-center">
            <p className="text-xs">ABOUT</p>
        </div>
        <div className="mr-3 flex items-center justify-center">
            <p className="text-xs">CONTACT</p>
        </div>
        <div className="mr-3 flex items-center justify-center">
            <p className="text-xs">GALLERIES</p>
        </div>
      </div>

      <div className="flex justify-between mt-6 mb-8">
        <p className="text-xs">Copyright ©2025; Designed by Dominik Spajić</p>
      </div>
    </div>
  );
}

export default Footer;
