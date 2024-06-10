import { Box, Typography } from "@mui/material";
import MovieCard from "./movieCard";

    
export default function upcomigSection() {
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
            margin:"20px"
          }}>
            Upcoming YIFY Movies
          </Typography>
<Box sx={{
          display:"flex",
          flexDirection:"row",
          gap:"30px",
          justifyContent:"center",
        }}>
          
          <MovieCard genre="Action" rating={5.7} title={"The Magical Legend of The Island"} img={"https://yts.homes/upload/6765318126b47b0c57ad49c3c8b6ea95.jpg"} year={"1999"} />
          <MovieCard genre="Action" rating={5.7} title={"To Live"} img={"http://yts.homes/upload/2f6f823ac2da6676d68984975d25c804.jpg"} year={"1994[CHINESE]"} />
          <MovieCard genre="Action" rating={5.7} title={"Unstoppable"} img={"http://yts.homes/upload/680058c30653ef21fb024ba531ae05a8.jpg"} year={"2013"} />
          <MovieCard genre="Action" rating={5.7} title={"Silent Retreat"} img={"http://yts.homes/upload/0ba70317beb3d879e341472f6d0ba246.jpg"} year={"2013"} />

        </Box>
        </Box>
    )
}