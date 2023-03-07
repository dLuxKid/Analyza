import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar, setScreenSize } from "../../store/Reducers/userSlice";
import { BsChevronDoubleRight, BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

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
    <div className="container">
      {!side && screenSize <= 768 ? (
        <div className="icon absolute left-0 top-9 ml-3 justify-center">
          <span onClick={() => dispatch(setOpenSidebar())}>
            <BsChevronDoubleRight />
          </span>
        </div>
      ) : null}
      <div className="flex flex-col gap-y-5 justify-between md:flex-row md:flex-grow ml-8">
        <div className="flex flex-col sm:gap-y-1 gap-y-0.5">
          <h1 className="text-black1 text-4xl font-bold md:text-2xl sm:text-xl">
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
            <div></div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
