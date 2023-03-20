import React from 'react'

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

export default FollowersCard