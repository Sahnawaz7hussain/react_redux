import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMusics } from "../Redux/AppReducer/action";

const SingleMusic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { musics } = useSelector((store) => {
    return store.appReducer;
  });
  const currentMusic =
    musics.length > 0 &&
    musics.find((el) => {
      return el.id === id;
    });
  useEffect(() => {
    if (musics.length === 0) {
      dispatch(getMusics());
    }
  }, []);
  return (
    <div>
      <div>Single Music page</div>
      <div>
        <h4>{currentMusic.name}</h4>
        <img src={currentMusic.img} alt={currentMusic.name} />
        <p>{currentMusic.artist}</p>
        <p>{currentMusic.genre}</p>
        <p>Year: {currentMusic.year}</p>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default SingleMusic;
