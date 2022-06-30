import React from "react";

export const ActivityCard = ({ data }) => {
  return (
    <div className="bg-white shadow-teamCard lg:w-3/12 w-full">
      <div className="flex justify-between py-8 px-10 border-b-[1px] border-[#EFEFEF]">
        <h3 className="font-bold text-lg">Activity</h3>
      </div>
      <div className="py-4 px-10">
        {data.map((item) => (
          <div key={item.id} className="flex my-4 items-center">
            <img
              src={item.person.avatar}
              className="h-9 w-9 rounded-full mr-2"
            />
            <div>
              <h3 className="text-base font-medium text-[#44444]">
                {item.person.name} <span className="text-[#787878] mx-1">{item.action}</span> {item.target}
              </h3>
              <p className="text-[13px] font-medium text-[#bbbbbb]">{item.created_at}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
