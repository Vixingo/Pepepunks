import { Box, IconButton, Stack } from "@mui/material";
import React from "react";

function Footer() {
    return (
        <>
            <Box className="pt-3">
                <Stack sx={{ flexDirection: "row", justifyContent: "center" }}>
                    <IconButton
                        sx={{
                            color: "#4CA148",
                            borderRadius: "10px",
                            transition: "0.2s",
                            ":hover": {
                                color: "#fff",

                                textShadow: " 0 0 10px #4CA148",
                            },
                        }}
                    >
                        <i class="fab fa-twitter"></i>
                    </IconButton>

                    <IconButton
                        sx={{
                            color: "#4CA148",
                            borderRadius: "10px",
                            transition: "0.2s",
                            ":hover": {
                                color: "#fff",

                                textShadow: " 0 0 10px #4CA148",
                            },
                        }}
                    >
                        <i class="fab fa-discord"></i>
                    </IconButton>
                </Stack>
            </Box>
        </>
    );
}

export default Footer;
