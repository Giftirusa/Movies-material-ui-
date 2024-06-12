import { Box, Button, Link, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/navbar";
import MovieCard from "../components/movieCard";
import Footer from "../components/footer";


export default function Page({searchParams}:{searchParams:any}) {
    return (
        <>
            <PrimarySearchAppBar />
            <Box sx={{
                display: "flex",
                margin: "auto",
                width: "60%",
                flexDirection: "row",
                gap: "100px"
            }}>
                <Box>
                    <MovieCard genre="Action" rating={5.7} title={searchParams.movieTitle} img={searchParams.movieImage} year={"1966"} />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Button variant="contained" color="success">Download</Button>
                        <Button variant="contained" color="info">Watch Now</Button>
                    </Box>
                </Box>
                <Box sx={{
                    color: "white"
                }}>
                    <Typography
                        sx={{ fontSize: "40px", marginBottom: "20px" }}
                    >
                        {searchParams.movieTitle}
                    </Typography>

                    <Typography>
                        1966
                    </Typography>

                    <Typography
                        sx={{ marginBottom: "20px" }}>
                        Action / Drama / Romance / Thriller
                    </Typography>



                    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "10px", marginBottom: "10px" }}>
                        <Typography>
                            Available in:

                        </Typography>

                        <Box sx={{ display: "inline-block", padding: "5px", border: "solid .5px grey", opacity: "80%", color: "white" }}>
                            <Typography sx={{ fontSize: "12px" }}>
                                720p.WEB
                            </Typography>
                        </Box>

                        <Box sx={{ display: "inline-block", padding: "5px", border: "solid .5px grey", opacity: "80%", color: "white" }}>
                            <Typography sx={{ fontSize: "12px" }}>
                                1080p.WEB
                            </Typography>
                        </Box>

                        <Box sx={{ display: "inline-block", padding: "5px", border: "solid .5px grey", opacity: "80%", color: "white" }}>
                            <Typography sx={{ fontSize: "12px" }}>
                                2160p.WEB
                            </Typography>
                        </Box>
                    </Box>

                    <Button variant="outlined" sx={{ borderColor: "grey", opacity: "80%", color: "white", marginBottom: "20px",fontSize:"10px" }} >Download Subtitles</Button>

                    <Box sx={{ fontSize: "10px" }}>
                        <Typography>
                            67%-Critics
                        </Typography>

                        <Typography>
                            53%-Audience
                        </Typography>

                        <Typography>
                            6.6 10 26776
                        </Typography>
                    </Box>

                    <Typography
                        sx={{ marginTop: "20px", marginBottom: "20px" }}>
                        720p.BluRay 1080p.BluRay
                    </Typography>

                    <Typography
                        sx={{ marginTop: "20px", marginBottom: "20px" }}>
                        Download Subtitles
                    </Typography>

                    <Typography>
                        Keywords: cold war, east germany
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                paddingTop: "50px",
                color: "white",
                display: "flex",
                margin: "auto",
                width: "60%",
                flexDirection: "column",
                gap: "10px"
            }}>
                <Typography sx={{
                    color: "white",
                }}>
                    Plot summary
                </Typography>

                <Typography sx={{ color: "grey", }}>
                    During the Cold War, an American scientist appears to defect to East Germany as part of a cloak and dagger mission to find the formula for a resin solution, but the plan goes awry when his fiancee, unaware of his motivation, follows him across the border.
                </Typography>

                <Typography sx={{ color: "grey", fontSize: "12px" }}>
                    Uploaded by: <span>FREEMAN</span>
                </Typography>

                <Typography sx={{ color: "grey", fontSize: "12px" }}>
                    May 04,2024 at 12:29 PM
                </Typography>
            </Box>

            <Box sx={{
                paddingTop: "50px",
                color: "white",
                display: "flex",
                margin: "auto",
                width: "60%",
                flexDirection: "column",
            }}>
                <Typography>
                    Tech specs
                </Typography>

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

            <Footer />
        </>
    )
}
