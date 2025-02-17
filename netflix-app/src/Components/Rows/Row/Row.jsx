// import React from 'react'
import { useEffect, useState } from "react";
import styles from "./row.module.css"
import axios from '../../../util/Axios'

import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";



// const {fetchUrl,title,isLarge}=this.props

function Row({ fetchUrl, title, isLarge }) {
  const [movies, setMoveis] = useState([]);
  const [trailer,setTrailer]=useState("");
  useEffect(() => {
    async function getMoveis() {
      try {
        const response = await axios.get(fetchUrl);

        setMoveis(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getMoveis();
  }, [fetchUrl]);



  const handleClick =(movie)=>{

    console.log("yess clickd me")
    if (trailer) {
      // console.log(movie?.name || movie?.original_name || movie?.title);

      setTrailer("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || movie?.title).then(
        (url) => {
          

          const urlPramas= new URLSearchParams( new URL(url).search)

          console.log(urlPramas)
          const singleTrailer = urlPramas.get("v");
          setTrailer(singleTrailer);

        }
      );

      // then(
      //   (url) => {

      //     console.log(url);
      //     const urlPramas= new URLSearchParams(new URL(url).search);
      //     console.log(urlPramas);

      //
    }
  }

  const opts = {
      height: '600',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

  

  return (
    <div className={styles.content}>
      <span className={styles.title}>
        <h1>{title}</h1>
      </span>
      <div className={styles.white_title}>
        <div className={styles.movies_imgs}>
          {movies?.map((movie, index) => {
            return (
              <img
              
              
                onClick={() => {
                  handleClick(movie);
                }}
                key={index}
                className={`${styles.single_movies_img} ${
                  isLarge ? styles.trending_moveis_img : ""
                }`}
                src={`https://image.tmdb.org/t/p/original${
                  isLarge ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt="movie netflix "
              />
            );
          })}
        </div>
      </div>

      <div className="youtubbe">
        

        {trailer && <YouTube videoId={trailer} opts={opts}  />}</div>
    </div>
  );
}

export default Row;
