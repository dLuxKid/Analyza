import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar, setScreenSize } from "../../store/Reducers/userSlice";
import { BsChevronDoubleRight, BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/thomas.jpg";
// import facebook from "../../assets/images/facebook.png";
// import instagram from "../../assets/images/instagram.png";
// import linkedin from "../../assets/images/linkedin.png";
// import twitter from "../../assets/images/twitter.png";

const Header = ({ title, options }) => {
  const dispatch = useDispatch();
  const screenSize = useSelector((state) => state.user.screensize);
  const side = useSelector((state) => state.user.openSidebar);

  useEffect(() => {
    const handleSize = () => {
      dispatch(setScreenSize(window.innerWidth));
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [screenSize]);

  const socials = [
    {
      social: "Instagram",
    },
    {
      social: "Linkedin",
    },
    {
      social: "Twitter",
    },
    {
      social: "Facebook",
    },
  ];

  return (
    <nav className="mb-6">
      {!side && screenSize <= 976 ? (
        <div className="icon absolute left-0 sm:top-12 top-8 ml-3 justify-center">
          <span onClick={() => dispatch(setOpenSidebar())}>
            <BsChevronDoubleRight />
          </span>
        </div>
      ) : null}
      <div
        className="flex flex-col gap-y-3 md:gap-y-5 justify-between lg:flex-row md:flex-grow"
        style={{ marginLeft: screenSize <= 976 ? "2rem" : "" }}
      >
        <div className="flex flex-col gap-y-0.5">
          <h1 className="text-black1  font-bold md:text-3xl sm:text-2xltext-xl">
            {title}
          </h1>
          <p className="text-natural3 text-xs sm:text-sm md:text-base font-medium capitalize">
            Here is what is happening in your account today
          </p>
        </div>
        <div className="flex gap-0 sm:gap-2 md:gap-4 h-8">
          {options ? (
            <div className="flex justify-center items-center p-2 -ml-5 md:ml-0">
              <select
                defaultValue="instagram"
                className="outline-0 border-natural3 text-black2"
              >
                {socials.map((item, index) => (
                  <option key={index} value={item.social.toLowerCase()}>
                    {item.social}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <div className="icon">
            <CiSearch />
          </div>
          <div className="icon">
            <BsBell />
          </div>
          <div className="flex  gap-1 sm:gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col h-8">
              <p className="font-bold text-black2  text-xs sm:text-sm leading-4">
                Thomas F.
              </p>
              <p className="font-extralight text-xs sm:text-sm text-natural3">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
