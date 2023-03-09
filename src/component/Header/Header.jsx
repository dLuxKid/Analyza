import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar, setScreenSize } from "../../store/Reducers/userSlice";
import { BsChevronDoubleRight, BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/thomas.jpg";

const Header = () => {
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

  return (
    <div className="">
      {!side && screenSize <= 768 ? (
        <div className="icon absolute left-0 top-9 ml-3 justify-center">
          <span onClick={() => dispatch(setOpenSidebar())}>
            <BsChevronDoubleRight />
          </span>
        </div>
      ) : null}
      <div
        className="flex flex-col gap-y-5 justify-between lg:flex-row md:flex-grow"
        style={{ marginLeft: screenSize <= 768 ? "2rem" : "" }}
      >
        <div className="flex flex-col gap-y-0.5">
          <h1 className="text-black1  font-bold md:text-3xl sm:text-2xl text-xl">
            Welcome, Thomas
          </h1>
          <p className="text-natural3 text-xs sm:text-sm md:text-base font-medium capitalize">
            Here is what is happening in your account today
          </p>
        </div>
        <div className="flex gap-4">
          <div className="icon">
            <CiSearch />
          </div>
          <div className="icon">
            <BsBell />
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img
                src={logo}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col h-8">
              <p className="font-bold text-black2 text-sm leading-4">
                Thomas F.
              </p>
              <p className="text-xs text-natural3">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
