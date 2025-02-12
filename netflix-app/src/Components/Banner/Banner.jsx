// import React from 'react'
import { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../util/axios";
import requests from "../../util/requset";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function getVideo() {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    }

    getVideo();
  }, []);
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n) + "..." : str;
  };
  console.log(movie);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner_content ">
          <h2>{movie.name || movie.original_nameame}</h2>

          <div className="banner_btns">
            <div className="banner_play_btn">
              <button className="netflix-btn other">Play</button>
            </div>
            <div className="banner_btn_myList ">
              <button className="netflix-btn mylist">My List</button>
            </div>{" "}
          </div>
          <div className="banner_description">
            <p>{truncate(`${movie.overview}`, 170)}</p>
          </div>
        </div>

        <div className="banner_fadded">ss</div>
      </div>
    </>
  );
}

export default Banner;
