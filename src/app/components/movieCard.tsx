import { Box, Button, Typography } from "@mui/material";

export default function MovieCard({ title, img, rating, genre, year }: {
    img: string
    year: string
    title: string
    genre: string
    rating: Number
}) {
    return (
        <Box>
            <Box sx={{
                '&:hover': {
                    borderColor: "#6AC045",
                },
                transition: "all .3s",
                border: "solid 3px white",
                width: "160px",
                height: "250px",
                borderRadius: "5px",
                backgroundSize: "contain",
                backgroundImage: `url(${img})`,
            }}>
                <Box sx={{
                    '&:hover': {
                        opacity: .9,
                        backgroundColor: "black",
                        translate:"0 0"
                    },
                    translate:"0 10px",
                    color: "white",
                    opacity: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: "100%",
                    transition: "all .3s",
                }}>
                    
                    <Box>
                        ⭐
                    </Box>
                    <Typography> {rating.toString()} / 10</Typography>
                    <Typography> {genre}</Typography>
                    <Button 
                        variant="contained" 
                        color="success"
                    >
                        View Details
                    </Button>
                </Box>
            </Box>

            <Box sx={{
                width: "140px",
                height: "50px",
            }}>
                <Typography sx={{
                    color: "white",
                    fontSize: "10px",
                }}>
                    {title}
                </Typography>

                <Typography sx={{
                    color: "white",
                    fontSize: "10px"
                }}
                >
                    {year}
                </Typography>

            </Box>



        </Box>
    );

}