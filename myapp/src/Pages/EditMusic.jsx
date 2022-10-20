import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditMusic = () => {
  const { id } = useParams();
  const { musics } = useSelector((store) => {
    return store.appReducer;
  });
  // const currentMusic
  return <div>EditMusic</div>;
};

export default EditMusic;
