import { Box, Typography } from "@mui/material";
import React from "react";

function WalletHero() {
    return (
        <>
            <section className="WalletHero">
                <div className="container">
                    <Typography
                        sx={{
                            color: "#fff",
                            fontFamily: "Rajdhani",
                            fontSize: "63px",
                            fontWeight: "700",
                            textAlign: "center",
                        }}
                    >
                        <span style={{ color: "#4CA148" }}>PEPEPUNKS</span> YOU
                        OWN
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Rajdhani",
                            fontSize: "14px",
                            color: "#4CA148",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "-20px",
                        }}
                    >
                        <span style={{ color: "#fff" }}>IN WALLET</span>{" "}
                        0x2a9445da26c11b7f975f6e99c5bcc3176e45a858
                    </Typography>
                    <div className="row my-5 pb-5">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <Box
                                sx={{
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "41px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Rajdhani",
                                            fontSize: "27px",
                                            color: "#fff",
                                            fontWeight: "bold",

                                            textAlign: "center",
                                            background: "rgba(0, 0, 0, 0.83);",
                                        }}
                                    >
                                        PEPEPUNK #18
                                    </Typography>
                                </Box>
                                <img
                                    src="../img/punk1.png"
                                    alt=""
                                    width={"100%"}
                                />
                            </Box>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <Box sx={{ position: "relative" }}>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "41px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Rajdhani",
                                            fontSize: "27px",
                                            color: "#fff",
                                            fontWeight: "bold",

                                            textAlign: "center",
                                            background: "rgba(0, 0, 0, 0.83);",
                                        }}
                                    >
                                        PEPEPUNK #18
                                    </Typography>
                                </Box>
                                <img
                                    src="../img/punk2.png"
                                    alt=""
                                    width={"100%"}
                                />
                            </Box>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <Box sx={{ position: "relative" }}>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "41px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Rajdhani",
                                            fontSize: "27px",
                                            color: "#fff",
                                            fontWeight: "bold",

                                            textAlign: "center",
                                            background: "rgba(0, 0, 0, 0.83);",
                                        }}
                                    >
                                        PEPEPUNK #18
                                    </Typography>
                                </Box>
                                <img
                                    src="../img/punk3.png"
                                    alt=""
                                    width={"100%"}
                                />
                            </Box>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <Box sx={{ position: "relative" }}>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "41px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Rajdhani",
                                            fontSize: "27px",
                                            color: "#fff",
                                            fontWeight: "bold",

                                            textAlign: "center",
                                            background: "rgba(0, 0, 0, 0.83);",
                                        }}
                                    >
                                        PEPEPUNK #18
                                    </Typography>
                                </Box>
                                <img
                                    src="../img/punk4.png"
                                    alt=""
                                    width={"100%"}
                                />
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WalletHero;
