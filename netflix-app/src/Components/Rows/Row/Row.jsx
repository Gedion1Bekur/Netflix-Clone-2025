// import React from 'react'
import { useEffect, useState } from "react";
import "./row.css"
import axios from '../../../util/Axios'


// const {fetchUrl,title,isLarge}=this.props

function Row({ fetchUrl, title, isLarge }) {
  const [moveis, setMoveis] = useState([]);
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

console.log(moveis)
  return (
    <div className="content">
      <div className="white_title">
        <h1>{title}</h1>

        <div className="movies_imgs">
          {moveis?.map((movie, index) => {
            return (
              <img
                className={isLarge ? "trending_moveis_img" : "single_movies_img"}
                key={index}
                src={`https://image.tmdb.org/t/p/original${
                  isLarge ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Row;
