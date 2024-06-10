import { Box, Typography } from "@mui/material";
import PrimarySearchAppBar from "./components/navbar";
import MovieCard from "./components/movieCard";
import Hero from "./components/hero";
import LatestSection from "./components/latestSection";
import { Upcoming } from "@mui/icons-material";
import UpcomingSection from "./components/upcomingSection";
import Footer from "./components/footer";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >

  </Box>
);

export default function Home() {
  return (
    <>
      <Box sx={{background:"black",

      }}>
        <PrimarySearchAppBar />

        <Hero />
        
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap:"30px",
          justifyContent:"center",
        }} >
        <MovieCard genre="Crime" rating={9} title={"The Outfit Full HD Movie Download"} img={"https://yts.homes/upload/31f15d5d781a7cc5f1b593b04f786c15.jpeg"} year={"2022"} />
        <MovieCard genre="Action" rating={5.5} title={"V/H/S/94"} img={"https://yts.homes/upload/1257c12039728ee7ce62aeafc845e880.jpeg"} year={"2006"} />
        <MovieCard genre="Drama" rating={5.7} title={"Umma(yts)"} img={"https://yts.homes/upload/812b44bea16ecafd1373b70e74c7e4b1.jpeg"} year={"2022"} />
        <MovieCard genre="Action" rating={5.7} title={"Torn Curtains"} img={"https://yts.homes/upload/5c0699d266bad40688a8791ca75f0b15.jpg"} year={"1966"} />
        </Box>


        <LatestSection />

        <UpcomingSection />

        <Footer/>
      </Box>
    </>
  );
}
