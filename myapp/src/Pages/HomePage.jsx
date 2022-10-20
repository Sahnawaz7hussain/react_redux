import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicAlbums from "../Components/MusicAlbums";
const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "auto",
          border: "1px solid black",
        }}
      >
        <FilterSort />
        <MusicAlbums />
      </div>
    </>
  );
};

export default HomePage;
