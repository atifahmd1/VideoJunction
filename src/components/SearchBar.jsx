import {Search} from "@mui/icons-material";
import {IconButton, Paper} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: {sm: 5},
      }}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{p: "10px", color: "#e8021d"}}
        aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
