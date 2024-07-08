import { Box, Typography } from "@mui/material";
import MovieCard from "./movieCard";
import { Repeat } from "@mui/icons-material";
import { useState,useEffect } from "react";

export default function latestSection() {
  let [movies,setMovies] = useState([])


  async function newGetMovies() {
    let resp = await fetch("http://localhost:8000/movies")
    let data = resp.json()
    console.log(data)

    return data
}

async function setupMovies(){
  let backendresp = await newGetMovies()

  let listofMovies = backendresp
  
  setMovies(listofMovies)
}

useEffect(()=>{
  setupMovies()
},[])

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap:"30px",
            justifyContent:"center",
            alignItems:"center",
          }}>
            <Typography sx={{
            color:"white",
            fontSize:"20px",
            margin:"20px",
            alignItems:"normal"
          }}>
            Latest YFIY Movie Torrent
          </Typography>


<Box sx={{
          display:"grid",
          gap:"30px",
          gridTemplateColumns:"repeat(4, 1fr)",
          gridTemplateRows:"repeat(2, 1fr)",
        }}>

{ movies.map((movie,idx) => {
    return <MovieCard genre="Crime" rating={movie.rating} title={movie.title} img={movie.image} year={"2022"} />
})}
          
          </Box>
        </Box>
    )

}




