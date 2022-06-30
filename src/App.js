import React, { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Sidenav from "./components/common/Sidenav";
import TeamCard from "./components/common/TeamCard";
import data from "./utils/data.json";
import { ActivityCard } from "./components/common/ActivityCard";
import Header from "./components/common/Header";


const App = () => {
  const [teamsData, setTeamsData] = useState(data.teams);
  const [searchValue, setSearchValue] = useState("");
  const [activeItem, setActiveItem] = useState({
    All: true,
    Favorites: false,
    Archived: false,
  });

  useEffect(() => {
    if (activeItem.Favorites) {
      let favoriteTeams = data.teams.filter((team) => team.is_favorited);
      setTeamsData(favoriteTeams);
    } else if (activeItem.Archived) {
      let archivedTeams = data.teams.filter((team) => team.is_archived);
      setTeamsData(archivedTeams);
    } else {
      setTeamsData(data.teams);
    }
  }, [activeItem]);

  return (
    <>
      <div className="flex flex-col">
        <Sidenav />
        <Navbar userInfo={data.current_user} />
        <Header
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setSearchValue={setSearchValue}
        />
        <main className="p-5 lg:p-10 bg-[#E5E5E5]">
          <div className="flex flex-wrap gap-6">
            <TeamCard
              data={teamsData}
              activeItem={activeItem}
              searchValue={searchValue}
            />
            <ActivityCard data={data.activities} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
