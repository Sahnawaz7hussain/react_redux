import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMusics } from "../Redux/AppReducer/action";

const MusicAlbums = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { musics } = useSelector((store) => {
    return store.appReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    let genre = searchParams.getAll("genre");
    let sortBy = searchParams.get("sortBy");
    let queryParams = {
      params: {
        genre: genre,
        _sort: searchParams.get("sortBy") && "year",
        _order: sortBy,
      },
    };

    //console.log("genre::", "useFEffect running");
    dispatch(getMusics(queryParams));
  }, [location.search]);
  return (
    <div
      style={{
        height: "auto",
        width: "auto",
        border: "1px solid blue",
      }}
    >
      {musics.length > 0 &&
        musics.map((el) => (
          <div key={el.id}>
            <div>{el.name}</div>
            <div>
              <Link to={`music/${el.id}`}>
                {" "}
                <img src={el.img} alt={el.name} />
              </Link>
            </div>
            <p>{el.genre}</p>
            <p>{el.year}</p>
            <Link to={`/music/${el.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MusicAlbums;
