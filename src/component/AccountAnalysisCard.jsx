import React from 'react'

const AccountAnalysisCard = ({ about, icon, icon2, number, sign, color }) => {
    return (
        <div className="flex flex-col flex-grow xs:w-2/5 md:w-auto gap-y-4 bg-white p-3 rounded-lg">
            <p className="text-base font-medium capitalize flex gap-2">
                <span className=" rounded-md p-2 flex justify-center text-black1 bg-natural3 mr-1">
                    {icon}
                </span>
                {about}
            </p>
            <p className={`${color} text-sm flex justify-between items-center`}>
                <span className="text-xs sm:text-base md:text-lg font-bold text-black2 mr-3">
                    {number}
                </span>
                <span className="flex justify-center text-sm">
                    <span className="mr-0.5 text-lg">{icon2}</span> {sign}1.90%
                </span>
            </p>
        </div>
    );
};


export default AccountAnalysisCard