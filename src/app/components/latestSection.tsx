import { Box, Typography } from "@mui/material";
import MovieCard from "./movieCard";
import { Repeat } from "@mui/icons-material";

export default function latestSection() {
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

          <MovieCard genre="Documentary" rating={5.2} title={"ShadowRing"} img={"https://yts.homes/upload/106f0987f2bc4a61a7891f629c05c1bb.jpg"} year={"2013"} />
          <MovieCard genre="Action" rating={5.7} title={"The Pink Cloud"} img={"https://yts.homes/upload/f4250f4cc267997666293fd666d5142d.jpg"} year={"2012"} />
          <MovieCard genre="Action" rating={5.7} title={"Patriots Day"} img={"https://yts.homes/upload/09dedcc5eb27f43c346b6aac1b05cdba.jpg"} year={"2016"} />
          <MovieCard genre="Action" rating={5.7} title={"The Big Doll House"} img={"https://yts.homes/upload/c347938c056f2843b82c96a4b793fddd.jpg"} year={"2022"} />
          <MovieCard genre="Horror" rating={5.5} title={"Los Habitantes"} img={"https://yts.homes/upload/c229b0befa1703a6bdc09b3f3ee6b0c2.jpg"} year={"2023[SPANISH]"} />
          <MovieCard genre="Action" rating={6.2} title={"Apple Music Live"} img={"https://yts.homes/upload/ee51566ff4fb552359c8a0c5e3718013.jpg"} year={"2024"} />
          <MovieCard genre="Hindu" rating={4.5} title={"Punjab Nahi Jaungi"} img={"https://yts.homes/upload/7584271582d05aa28b3622181331e857.jpg"} year={"2017"} />
          <MovieCard genre="Horror" rating={9} title={"Empire of Dreams"} img={"https://yts.homes/upload/956aa12c56c500556d28dda1a0632438.jpg"} year={"2004"} />
          </Box>
        </Box>
    )

}




