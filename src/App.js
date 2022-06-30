import React, { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Sidenav from "./components/common/Sidenav";
import TeamCard from "./components/common/TeamCard";
import data from "./utils/data.json";
import { ActivityCard } from "./components/common/ActivityCard";
import Header from "./components/common/Header";

const URL =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220630T035724Z&X-Amz-Expires=86400&X-Amz-Signature=8778a09c63ceb9f0439bb3865e7e81a0a79349309a16d7af3ad1bf8ab97206a4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject";

const App = () => {
  const [teamsData, setTeamsData] = useState(data.teams);
  const [searchValue,setSearchValue]=useState("")
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
        <Navbar />
        <Header activeItem={activeItem} setActiveItem={setActiveItem} setSearchValue={setSearchValue}/>
        <main className="p-5 lg:p-10 bg-[#E5E5E5]">
          <div className="flex flex-wrap gap-6">
            <TeamCard data={teamsData} activeItem={activeItem} searchValue={searchValue} />
            <ActivityCard data={data.activities} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
