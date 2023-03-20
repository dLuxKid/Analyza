import React from "react";
import Header from "../component/Header/Header";
import AccountAnalysisCard from "../component/AccountAnalysisCard";
import { GiProgression } from 'react-icons/gi'
import { MdPeople, MdArrowUpward, MdArrowDownward } from 'react-icons/md'
import { AiFillLike, } from 'react-icons/ai'
import { BsBookmarksFill } from 'react-icons/bs'

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

          </div>
          <div className="bg-white md:w-1/3 rounded-xl p-4 sm:p-6 flex flex-col gap-4 lg:p-6  items-center">

          </div>
          <div className="flex flex-col gap-3 w-full">

          </div>
        </section>
      </section>
    </div>
  );
};

export default Analytics;
