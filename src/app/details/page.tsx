import { Box, Button, Link, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/navbar";
import MovieCard from "../components/movieCard";

export default function Page(){
    return (
        <>
        <PrimarySearchAppBar/>
        <Box>

        <MovieCard genre="Action" rating={5.7} title={"Torn Curtains"} img={"https://yts.homes/upload/5c0699d266bad40688a8791ca75f0b15.jpg"} year={"1966"} />
        <Button variant="contained">Download</Button>
        </Box>
        <Box>
            <Typography>
                Torn Curtain
            </Typography>
            <Typography>
                1966
                Action/Drama/Romance/Thriller
            </Typography>
            <Typography>
                Available in: 720p.WEB 1080p.WEB 2160p.WEB
            </Typography>
            <Typography>
                Download Subtitles
            </Typography>
            <Typography>
                67%-Critics
                53%-Audience
                6.6 10 26776
            </Typography>
            <Typography>
                Download Subtitles
            </Typography>
            <Typography>
                Keywords: cold war, east germany
            </Typography>
        </Box>
        <Box >
            <Typography sx={{
                color:"white",
            }}>
                Plot summary
            </Typography>

            <Typography sx={{ color:"grey",}}>
                A man vows to win the heart of the woman he loves.
            </Typography>

            <Typography>
                Uploaded by: <span>FREEMAN</span>
            </Typography>
            <Typography>
                May 04,2024 at 12:29 PM
            </Typography>
        </Box>
        <Box>
            <Typography>
                1.36 GB
            </Typography>
            <Typography>
                1280*534
            </Typography>
            <Typography>
                Urdu 2.0
            </Typography>
            <Typography>
                Subtitles
            </Typography>
            <Typography>
                25fps
            </Typography>
            <Typography>
                2 hr 32 min
            </Typography>


            </Box>
            </>
    )
}