 
 import requsets from "./requset";
 const fetchdata = [

  {
    fetchUrl: requsets.fetchTrending,
    title: "Trending New",
    isLarge:true,
  },
  {
    fetchUrl: requsets.fetchActionMovies,
    title: "Action  Movies",
  },

  {
    fetchUrl:  requsets.fetchComedyMovies,
    title: "Comedy Movies",
  },

  {
    fetchUrl: requsets.fetchDocumentaries ,
    title: "Documentary Movies",
  },

  {
    fetchUrl:  requsets.fetchHorrorMovies,
    title: "Horror Movies",
  },

  {
    fetchUrl: requsets.fetchRomanceMovies ,
    title: "Romance Movies",
  },

  {
    fetchUrl: requsets.fetchTvShow,
    title: "TV Show",
  },
 
 
 
];


export default fetchdata