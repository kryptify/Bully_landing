import * as React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center align-middle flex-wrap text-white sm:p-16 md:px-24 lg:px-40 mt-20">
      <div className="flex flex-item w-full justify-center">
        <img src="/assets/logo.svg" />
      </div>
      <p className="flex-item font-bold text-3xl m-10 hidden sm:block">Join the Winning Team</p>
      <p className="flex-item text-2xl mb-32 hidden sm:block">
        Delve into the exclusive advantages and privileges of being part of the
        cutting-edge ecosystem powered by $BULLY. Enter a realm of innovation,
        active participation, and remarkable rewards by becoming a member of the
        thriving Bullypad.io community today!
      </p>
      <div className="hidden md:block h-1 w-full bg-white">
      </div>
        <div className="w-full">
            <div className="flex md:justify-end sm:justify-center justify-center mt-5 gap-3 mb-9">
            <div className="icon-image">
                <img src="/assets/link.svg" className="w-6 h-6" />
            </div>
            <div className="icon-image">
                <img src="/assets/twitter.svg" className="w-6 h-6" />
            </div>
            <div className="icon-image">
                <img src="/assets/tele.svg" className="w-6 h-6" />
            </div>
            <div className="icon-image">
                <img src="/assets/instagram.svg" className="w-6 h-6" />
            </div>
            </div>
        </div>
      <p className="flex-item text-2xs md:text-xl sm:mt-20 lg:mt-32 sm:text-2xs">
        The Bullypad.io platform (“Platform”) provides engagement opportunities.
        By utilizing the Platform, you agree to comply with our Terms of
        Service, Privacy Policy, Cookie Policy, and Token purchase terms.
        Cryptocurrency regulations differ by location, and digital currency
        values can fluctuate. Profits from cryptocurrencies may be subject to
        taxation according to local laws. Information on this platform isn’t
        intended as investment advice. You should assess the suitability of any
        financial activity based on your financial situation and risk tolerance.
        Consulting licensed professionals in legal, tax, insurance, or financial
        planning is advised for personalized guidance. Bullypad.io doesn’t
        guarantee specific financial outcomes or the preservation of capital
        related to any referenced cryptocurrency. Usage of this site implies
        acceptance of our Token sale terms. Investing in cryptocurrencies
        involves inherent risks that could lead to partial or total loss of
        funds
      </p>
      <p className="flex-item text-xl mt-10 mb-32">
        Copyright 2023 Bullypad.io All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
