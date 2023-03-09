// REACT
import React from "react";
// IMAGES
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
// CHART
import React from "react";
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
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

const FollowersCard = ({ image, followers, color, sign }) => {
  return (
    <div className="flex gap-5 px-4 py-2 justify-center items-center bg-white rounded-xl">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={image} alt={image} className="w-full h-full" />
      </div>
      <div>
        <p className="text-black2 font-bold text-lg">
          <span>{followers}K</span> Followers
        </p>
        <p className="text-natural2 font-medium text-sm">
          <span className={`text-${color} m-r3`}>{sign} 0.8 </span>
          This Week
        </p>
      </div>
    </div>
  );
};

const Overview = () => {
  document.title = "Home";

  return (
    <div className="py-10 h-full">
      <div className="flex flex-wrap justify-center  lg:justify-start items-center gap-6">
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
      <div className="flex gap-10 py-16">
        <div className="flex flex-col gap-9 w-2/3">
          <div className="bg-white rounded-xl p-5 pt-6">
            <div></div>
            <BarChart />
          </div>
          <div className="flex gap-10">Overview</div>
        </div>
        <div className="bg-white w-1/3 rounded-xl">Overview</div>
      </div>
    </div>
  );
};

export default Overview;
