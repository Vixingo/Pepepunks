import { Box, Button, Typography } from "@mui/material";
import React from "react";

function ClaimHero() {
    return (
        <>
            <section className="ClaimHero my-5 py-5">
                <div className="container">
                    <Box sx={{ margin: "0 auto", maxWidth: "650px" }}>
                        <img src="../img/claim.png" alt="" width={"100%"} />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: "Rajdhani",
                                color: "#fff",
                                fontSize: "63px",
                                fontWeight: "700",
                                textAlign: "center",
                            }}
                        >
                            CLAIM YOUR{" "}
                            <span style={{ color: "#4CA148" }}>$FROG</span>
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Rajdhani",
                                color: "#fff",
                                fontSize: "22px",
                                fontWeight: "700",
                                textAlign: "center",
                            }}
                        >
                            To claim $FROG, please{" "}
                            <Button
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#4CA148",
                                    fontFamily: "Rajdhani",
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    borderRadius: "8px",

                                    ":hover": {
                                        color: "#4CA148",
                                        backgroundColor: "#fff",
                                        boxShadow: " 0 0 10px #fff",
                                    },
                                }}
                            >
                                CONNECT
                            </Button>
                            <span style={{ color: "#4CA148" }}>
                                &nbsp; your wallet
                            </span>
                            .
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Rajdhani",
                                color: "#fff",
                                fontSize: "18px",
                                fontWeight: "medium",
                                textAlign: "center",
                            }}
                        >
                            For{" "}
                            <span style={{ fontWeight: "bold" }}>
                                each PepePunks NFT
                            </span>
                            , holders can claim{" "}
                            <span style={{ fontWeight: "bold" }}>
                                6.9 $FROG per 24 hours.
                            </span>
                        </Typography>{" "}
                        <Box
                            sx={{
                                textAlign: "center",
                                maxWidth: "500px",
                                margin: "0 auto",
                                paddingTop: "12px",
                            }}
                        >
                            <Button
                                sx={{
                                    color: "#fff",
                                    backgroundColor: "#4CA148",
                                    fontFamily: "Rajdhani",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    borderRadius: "8px",
                                    width: "100%",

                                    ":hover": {
                                        color: "#4CA148",
                                        backgroundColor: "#fff",
                                        boxShadow: " 0 0 10px #fff",
                                    },
                                }}
                            >
                                CLAIM $FROG
                            </Button>
                        </Box>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default ClaimHero;
