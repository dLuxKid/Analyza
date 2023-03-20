// REACT
import React, { useState } from "react";
// IMAGES
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import logo from "../assets/images/thomas.jpg";
// COMPONENTS
import Header from "../component/Header/Header";
import FollowersCard from "../component/FollowersCard";
import AccountAnalysisCard from "../component/AccountAnalysisCard";
// ICONS
import { RiUserFollowLine } from "react-icons/ri";
import {
  BiCommentMinus,
  BiShareAlt,
  BiLike,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { MdShowChart } from "react-icons/md";
// CHART
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const Overview = () => {
  document.title = "Home";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Data",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#858688",
      },
    ],
  };

  return (
    <main className="pb-10 h-full">
      <Header title={"Welcome Thomas 🎉"} />
      <section className="flex flex-wrap justify-center items-center gap-6">
        <FollowersCard
          image={twitter}
          followers="204"
          color="green"
          sign="&and;"
        />
        <FollowersCard
          image={instagram}
          followers="340"
          color="red"
          sign="&or;"
        />
        <FollowersCard
          image={linkedin}
          followers="144"
          color="green"
          sign="&and;"
        />
        <FollowersCard
          image={facebook}
          followers="440"
          color="red"
          sign="&or;"
        />
      </section>
      <section className="flex flex-col md:flex-row gap-6 py-10">
        <div className="flex flex-col gap-8 md:w-2/3">
          <div className="bg-white rounded-xl p-5">
            <div className="flex justify-center sm:justify-between gap-3 flex-col sm:flex-row items-center">
              <p className="font-bold text-lg md:text-xl text-black2">
                Range Stats
              </p>
              <div className="rounded-lg border-natural3 bg-white border p-1">
                <select className="text-natural3 outline-0">
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>
            <Bar
              options={options}
              data={data}
              className="min-h-[300px] w-[80%] xs:w-auto"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-between ">
            <AccountAnalysisCard
              about="Followers"
              icon={<RiUserFollowLine />}
              icon2={<MdShowChart />}
              number="10,000"
              sign="+"
              color="text-green"
            />
            <AccountAnalysisCard
              about="Likes"
              icon={<BiLike />}
              icon2={<MdShowChart />}
              number="12,000"
              sign="-"
              color="text-red"
            />
            <AccountAnalysisCard
              about="Comment"
              icon={<BiCommentMinus />}
              icon2={<MdShowChart />}
              number="1,000"
              sign="+"
              color="text-green"
            />
            <AccountAnalysisCard
              about="Share"
              icon={<BiShareAlt />}
              icon2={<MdShowChart />}
              number="1,300"
              sign="-"
              color="text-red"
            />
          </div>
        </div>
        <div className="bg-white md:w-1/3 rounded-xl p-4 sm:p-6 flex flex-col gap-4 lg:p-6  items-center">
          <div className="h-32 w-32 p-1 overflow-hidden border-2 border-fill rounded-full">
            <img
              src={logo}
              alt="Thomas"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black2 lg:text-xl xl:text-2xl font-bold">
              Thomas Flecther
            </h1>
            <p className="text-natural3 text-xs xs:text-sm md:text-base lg:text-xl">
              UI Designer
            </p>
          </div>
          <div className="bg-fill rounded-lg flex w-full justify-between p-2">
            <div>
              <p className="text-black2 font-medium text-lg leading-5">193</p>
              <p className="text-natural3 font-light text-sm">Posts</p>
            </div>
            <div>
              <p className="text-black2 font-medium text-lg leading-5">
                17,536
              </p>
              <p className="text-natural3 font-light text-sm">Followers</p>
            </div>
            <div>
              <p className="text-black2 font-medium text-lg leading-5">274</p>
              <p className="text-natural3 font-light text-sm">Following</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="self-start text-black2 font-bold text-sm sm:text-base md:text-xl">
                Latest Post
              </p>
              <span className="text-natural3 self-end text-sm sm:text-base md:text-xl">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="w-full h-28 rounded-xl overflow-hidden">
              <img
                src={twitter}
                alt="twitter"
                className="w-full h-full object-stretch"
              />
            </div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="thomas"
                className="h-4 w-4 rounded-full mr-2 object-contain"
              />
              <p className="text-xs md:text-sm text-black2 font-normal">
                @thomasfletcher
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-natural3 font-light mb-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                voluptates tenetur iste facilis animi.
              </p>
              <p className="text-xs md:text-sm text-black2 font-medium">
                #fletcher #winalways
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Overview;
