import React from "react";
import MediaQuery from "../MediaQuery";
import { HashLink as Link } from "react-router-hash-link";
import IconWA from '../../assets/icon-whatsapp.svg'
import { handleWhatsappMessage } from "../../Data/ConnectWA";

const links = [
  {section : "About", link : "/#about"},
  {section : "About", link : "/#about"},
  {section : "About", link : "/#about"}
]

const Footer = () => {
  const isMobile = MediaQuery("(max-width: 600px)");

  return (
    <div className="mt-20">
      {isMobile ? (
        // Mobile View
        <div className="bg-[#002050] text-white p-5">
          <div>
            <h4 className="font-bold text-[18px]">Bimbel Excelent</h4>
            <p>
              Bimbel excelent adalah platfom bimbingan belajar untuk calon peserta cpns yang ingin mengikuti cpns.
            </p>
          </div>
          <div className="flex space-x-10 mt-10">
            {/* Quicklink */}
              <div>
                <h4 className="font-bold">Quicklink</h4>
                <ul className="space-y-3 mt-2">
                  {
                    links.map((val, idx) => (
                      <li key={idx}>
                        <Link to={val.link}>{val.section}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              {/* Location */}
              <div className="space-y-2">
                <h4 className="font-bold">Location</h4>
                <p>Jl. Rengas Raya No.21, Rengas, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412 (Sebelah TK Kartini)</p>
              </div>
          </div>
          <footer className="text-center text-[14px] mt-10">
            ©2023, Bob's Private Indonesia
          </footer>
          <div onClick={handleWhatsappMessage} className="fixed bottom-10 right-5">
              <button>
                <img src={IconWA} alt="icon-whatsapp" className="w-14"/>
              </button>
          </div>
        </div>
      ) : (
        // Desktop View
        <div></div>
      )}
    </div>
  );
};

export default Footer;
