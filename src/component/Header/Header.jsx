import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar, setScreenSize } from "../../store/Reducers/userSlice";
import { BsChevronDoubleRight } from "react-icons/bs";

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
      <div className="mx-2 absolute left-0 top-9 cursor-pointer text-2xl">
        {!side && screenSize <= 768 ? (
          <span onClick={() => dispatch(setOpenSidebar())}>
            <BsChevronDoubleRight />
          </span>
        ) : null}
      </div>
      <div className="flex justify-between sm:flex-col sm:flex-grow ">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-black1 text-4xl font-semibold md:text-2xl sm:text-xl">
            Welcome, Thomas
          </h1>
          <p className="text-natural3 text-base font-medium capitalize">
            Here is what is happening in your account today
          </p>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Header;
