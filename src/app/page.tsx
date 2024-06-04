import { Box } from "@mui/material";
import PrimarySearchAppBar from "./components/navbar";
import MovieCard from "./components/movieCard";

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
      <Box sx={{background:"black"}}>
        <PrimarySearchAppBar />
        <MovieCard genre="horror" rating={9} title={"The Outfit Full HD Movie Download"} img={"https://yts.homes/upload/31f15d5d781a7cc5f1b593b04f786c15.jpeg"} year={"2022"} />
        <MovieCard genre="comedy" rating={5.5} title={"Movie2"} img={"https://yts.homes/upload/1257c12039728ee7ce62aeafc845e880.jpeg"} year={"2006"} />
      </Box>
    </>
  );
}
