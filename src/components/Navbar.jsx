import {Stack} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const fontSize = window.innerWidth <= 768 ? "18px" : "36px";
  console.log("API Key:", process.env.REACT_APP_RAPID_API_KEY);

  return (
    <Stack
      direction={{sm: "column", md: "row"}}
      alignItems={"center"}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
        zIndex: 100,
      }}>
      <Link to={"/"} style={{display: "flex", alignItems: "center"}}>
        <h1 style={{color: "#e8021d", marginLeft: 20, fontSize}}>
          VideoJunction
        </h1>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
