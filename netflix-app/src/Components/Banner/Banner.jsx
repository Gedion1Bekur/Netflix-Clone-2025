// import React from 'react'
import { useEffect, useState } from "react";

import styles from "./banner.module.css";
import axios from "../../util/Axios";
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
        console.warn(error);
      }
    }
 getVideo();
  }, []);
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n) + "..." : str;
  };


  return (
    <>
      <div className={styles.header}>
        <div
          className={styles.banner}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,

            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className={styles.banner_content}>
            <h2>{movie.name || movie.original_name || movie.title}</h2>

            <div className={styles.banner_btns}>
              <div className={styles.banner_play_btn}>
                <button className={`${styles["netflix-btn"]} ${styles.mylist}  ${styles.active}`}>
                  Play
                </button>
              </div>
              <div className={styles.btn}>
                <button
                  className={`${styles["netflix-btn"]} ${styles.mylist}  $`}
                >
                  My List
                </button>
              </div>
            </div>
            <div className={styles.banner_description}>
              <p>{truncate(`${movie.overview}`, 150)}</p>
            </div>
          </div>

          <div className={styles.banner_fadded}></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
