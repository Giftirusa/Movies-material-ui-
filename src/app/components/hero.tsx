import { Box, Typography } from "@mui/material";

export default  function Hero (){


return (
    <Box sx={{
        color: "white",
        display: "flex",
        gap:"15px",
        flexDirection:"column",
        alignItems:"center",
        marginBottom:"10px"
    }}>
    <Typography sx={{
        fontSize: "40px",
        fontWeight:"bold",
        textAlign:"center",
        color:"white",
    }}>
        Download YTS YIFY movies: HD smallest size
        </Typography>

        <Typography sx= {{
            color: "grey",
            fontSize:"15px",
            width:"60%",
            textAlign:"center"
        }}>
        Welcome to the official YTS.HOME(.LT)website.Here you can browse and download YIFY movies in
        excellent 720p,1080p,2160p 4K and 3D quality, all at the smallest file size.YTS Movies Torrents
        </Typography>

        <Typography sx={{
            color:"blue",
            ontSize:"15px"

        }}>
               IMPORTANT -YTS.HOME is the only new official domain for YIFY Movies 

        </Typography>

<Typography sx={{
    color:"white",
    fontSize:"16px",
}}>
      
      ⭐️ Popular Downloads

    </Typography>
    
    
    </Box>
) }
