import React from "react";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <section className="Navbar my-4">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="../img/logo.png" alt="" width={"100%"} />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link "
                                        aria-current="page"
                                        to="#"
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        ROADMAP
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        FAQ
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="wallet">
                                        {" "}
                                        <Button
                                            sx={{
                                                color: "#fff",
                                                backgroundColor: "#4CA148",
                                                fontFamily: "Rajdhani",
                                                width: "133px",
                                                height: "38px",
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
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;
