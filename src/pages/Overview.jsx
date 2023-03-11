// REACT
import React, { useState } from "react";
// IMAGES
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
// COMPONENTS
import Header from "../component/Header/Header";
// ICONS
import { RiUserFollowLine } from "react-icons/ri";
import { BiCommentMinus, BiShareAlt, BiLike } from "react-icons/bi";
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

const FollowersCard = ({ image, followers, color, sign }) => {
  return (
    <div className="flex gap-5 px-4 py-2 justify-center items-center bg-white rounded-xl">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={image} alt={image} className="w-full h-full" />
      </div>
      <div>
        <p className="text-black2 font-bold text-xs sm:text-sm md:text-base">
          <span>{followers}k</span> Followers
        </p>
        <p className="text-natural2 font-medium text-xs md:text-sm">
          <span className={`text-${color} mr-3`}>{sign} 0.8 </span>
          This Week
        </p>
      </div>
    </div>
  );
};

const AccountAnalysisCard = ({ about, icon, icon2, number, sign, color }) => {
  return (
    <div className="flex flex-col flex-grow sm:w-2/5 md:w-auto gap-y-4 bg-white p-3 rounded-lg">
      <p className="text-base font-medium capitalize flex gap-2">
        <span className=" rounded-md p-2 flex justify-center text-black1 bg-natural3 mr-1">
          {icon}
        </span>
        {about}
      </p>
      <p className={`text-${color} text-sm flex justify-between`}>
        <span className="text-xs sm:text-base md:text-lg font-bold text-black2 mr-3">
          {number}
        </span>
        <span className="flex justify-center">
          {icon2} {sign}1.90%
        </span>
      </p>
    </div>
  );
};

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
    <div className="pb-10 h-full">
      <Header title={"Welcome Thomas 🎉"} />
      <div className="flex flex-wrap justify-center items-center gap-6">
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
      </div>
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 py-10">
        <div className="flex flex-col gap-9 md:w-2/3">
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
              color="green"
            />
            <AccountAnalysisCard
              about="Likes"
              icon={<BiLike />}
              icon2={<MdShowChart />}
              number="12,000"
              sign="-"
              color="red"
            />
            <AccountAnalysisCard
              about="Comment"
              icon={<BiCommentMinus />}
              icon2={<MdShowChart />}
              number="1,000"
              sign="+"
              color="green"
            />
            <AccountAnalysisCard
              about="Share"
              icon={<BiShareAlt />}
              icon2={<MdShowChart />}
              number="1,300"
              sign="-"
              color="red"
            />
          </div>
        </div>
        <div className="bg-white md:w-1/3 rounded-xl">Overview</div>
      </div>
    </div>
  );
};

export default Overview;
