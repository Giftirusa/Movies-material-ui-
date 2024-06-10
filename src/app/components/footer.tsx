import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
        <Box sx={{
            color:"grey",
            display:"flex",
            flexDirection:"row",

        }}>
            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                YTS&copy;2011-2022

            </Typography>
            -

            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                Blog

            </Typography>
            -
            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                DMCA
            </Typography>
            -

            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                API

            </Typography>
            -

            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                RSS
            </Typography>
            -

            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                Contact
            </Typography>
            -

            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                Browse Movies
            </Typography>
            -

            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                Requests
            </Typography>
            -

            <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                Login
            </Typography>

            </Box>

            <Box  sx={{
            color:"grey",
            display:"flex",
            flexDirection:"row",

        }}>
                <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                    EZTV
                </Typography>
                -

                <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                    YIFY Status
                </Typography>
                -

                <Typography sx={{
                "&:hover":{color:"white"}
            }}>
                    YTS Proxies
                </Typography>

            </Box>
            <Box sx={{
                color:"white",
                  
            }}>
                <Typography>
                  By using this site you agree to and accept our <Typography component="span" sx={{color:"grey" ,"& hover": {color:"white"}}}>User Agreement</Typography>,which can be read <Typography component="span" sx={{color:"grey","&:hover": {color:"white"}}}>here.</Typography>
                </Typography>
            </Box>
        
        </Box>

    )
}