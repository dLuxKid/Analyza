import React, { useState } from "react";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import { MdOutlineShowChart, MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setOpenSidebar } from "../../store/Reducers/userSlice";
import { BsChevronDoubleLeft } from "react-icons/bs";

const Sidebar = () => {
  const screensize = useSelector((state) => state.user.screensize);
  console.log(screensize);
  const openSidebar = useSelector((state) => state.user.openSidebar);
  const dispatch = useDispatch();

  const links = [
    {
      name: "overview",
      icon: <HiHome />,
    },
    { name: "analytics", icon: <MdOutlineShowChart /> },
  ];

  const activeLink =
    "flex items-center gap-3 pt-2 pb-2 pl-2 pr-10 rounded-md text-white text-base sm:text-xl bg-black2 font-normal text-center capitalize cursor-pointer";
  const normalLink =
    "flex items-center gap-3 pt-2 pb-2 pl-2 pr-10 rounded-md text-natural3 text-base sm:text-xl font-normal text-center capitalize cursor-pointer";

  if (!openSidebar && screensize <= 768) {
    return null;
  }

  return (
    <div
      className={`w-60 overflow-auto h-screen duration-300 ease-in-out bg-black1 ${
        openSidebar ? "fixed" : null
      }`}
    >
      <div className="flex justify-between flex-col h-screen">
        <div className="flex flex-col items-center justify-center gap-10 mt-6 p-5">
          <div
            className={`flex justify-${
              !openSidebar ? "center" : "between"
            } w-full`}
          >
            <h1 className="text-white text-center origin-left font-bold items-center md:text-2xl sm:text-xl">
              Analyza
            </h1>
            <p
              className="text-white text-xl sm:text-2xl flex justify-center align-middle items-center text-center "
              onClick={() => dispatch(setOpenSidebar())}
            >
              {screensize <= 768 ? <BsChevronDoubleLeft /> : null}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            {links.map((link, index) => (
              <NavLink
                to={`/${link.name}`}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                key={index}
                onClick={() => dispatch(setOpenSidebar())}
              >
                <span>{link.icon}</span> <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className={`${normalLink} mb-20 justify-center`}>
          <HiOutlineLogout /> <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
