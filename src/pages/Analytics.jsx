import React from "react";
import Header from "../component/Header/Header";
import AccountAnalysisCard from "../component/AccountAnalysisCard";
import { GiProgression } from 'react-icons/gi'
import { MdPeople, MdArrowUpward, MdArrowDownward } from 'react-icons/md'
import { AiFillLike, } from 'react-icons/ai'
import { BsBookmarksFill } from 'react-icons/bs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'false'
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dev'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Monthly data',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#303974",
      backgroundColor: "#f5f5f5",
    },
  ],
};

const Analytics = () => {
  document.title = "Analytics";

  return (
    <div className="">
      <Header title={"Analytics 🔥"} options={true} />
      <section>
        <div className="flex flex-wrap gap-4 justify-between">
          <AccountAnalysisCard
            about="Account Reach"
            icon={<GiProgression />}
            icon2={<MdArrowUpward />}
            number="404,300"
            color="text-green"
          />
          <AccountAnalysisCard
            about="Followers"
            icon={<MdPeople />}
            icon2={<MdArrowDownward />}
            number="300,000"
            color="text-red" />

          <AccountAnalysisCard
            about="Likes"
            icon={<AiFillLike />}
            icon2={<MdArrowUpward />}
            number="340,000"
            color="text-green"
          />
          <AccountAnalysisCard
            about="Saved"
            icon={<BsBookmarksFill />}
            icon2={<MdArrowDownward />}
            number="40,000"
            color="text-red"
          />
        </div>
        <section className="flex flex-col md:flex-row gap-6 py-10">
          <div className="flex flex-col gap-8 md:w-2/3">
            <div className="bg-white rounded-xl p-5">
              <div className="flex justify-center sm:justify-between gap-3 flex-col sm:flex-row items-center">
                <p className="font-bold text-lg md:text-xl text-black2">
                  Range Stats
                </p>
                <div className="rounded-lg border-natural3 bg-white border p-1">
                  <select className="text-natural3 outline-0 cursor-pointer">
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              </div>
              <Line
                options={options}
                data={data}
                className="min-h-[300px] w-[80%] xs:w-auto"
              />
            </div>
            <div>

            </div>
          </div>
          <div className="bg-white md:w-1/3 rounded-xl p-4 sm:p-6 flex flex-col gap-4 lg:p-6 items-center">
            <div>
              
            </div>
            <div></div> 
          </div>
        </section>
      </section>
    </div>
  );
};

export default Analytics;
