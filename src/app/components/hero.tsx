import { Box, Typography } from "@mui/material";

export default  function Hero (){


return (
    <Box sx={{
        color: "white",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
    }}>
    <Typography sx={{
        fontSize: "50px",
        fontWeight:"bold",
        color:"white",
    }}>
        Download YTS YIFY movies: HD smallest size
        </Typography>

        <Typography sx= {{
            color: "white",
            fontSize:"20px",
            margin:"20px",


        }}>
        Welcome to the official YTS.HOME(.LT)website.Here you can browse and download YIFY movies in
        excellent 720p,1080p,2160p 4K and 3D quality, all at the smallest file size.YTS Movies Torrents
        </Typography>

        <Typography sx={{
            color:"blue",
            fontSize:"20px"

        }}>

               IMPORTANT -YTS.HOME is the only new official domain for YIFY Movies 

        </Typography>

<Typography sx={{
    color:"white",
    fontSize:"20px",
}}>
      
      Popular Downloads

    </Typography>
    
    </Box>
) }