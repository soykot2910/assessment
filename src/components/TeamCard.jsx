import React, { useEffect } from "react";
import Card from "./Card";

const TeamCard = ({ data, activeItem, searchValue, totalData }) => {
  if (searchValue.length > 0) {
    const regex = new RegExp(searchValue?.toLowerCase());
    data = data?.filter((team) => regex.test(team?.name?.toLowerCase()));
  }

  return (
    <div className="bg-white shadow-teamCard col-span-1 xl:col-span-9">
      <div className="flex justify-between py-8 px-10 border-b-[1px] border-[#EFEFEF]">
        <h3 className="font-bold text-lg">
          {activeItem.All
            ? "ALL"
            : activeItem.Favorites
            ? "Favorites"
            : "Archived"}{" "}
          Teams
        </h3>
        <p className="text-sm text-[#7F7F7F]">
          Showing {totalData} out of {data.length} teams
        </p>
      </div>
      <div className="py-8 px-10 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {data.length > 0 ? (
          data.map((team) => <Card key={team.id} team={team} />)
        ) : (
          <h3 className="text-3xl">No Teams Found</h3>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
