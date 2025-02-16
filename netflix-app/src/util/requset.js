const API_KEY = import.meta.env.VITE_API_KEY;


//!Key Note ene react_app must be upper case fr

const requsets = {
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&1anguage=en-US`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749*`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&1anguage=en-US&page=1`,
};

export default requsets;

/*  !!note i took for last day project

.movie-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  cursor: pointer;
}
.movie-row::-webkit-scrollbar {
  display: none;
   to hide the srollbar in browser *
 const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }; */