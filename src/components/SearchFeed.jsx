import {Box, Typography} from "@mui/material";
import {useState, useEffect} from "react";
import {Videos} from ".";

import {fetchFromAPI} from "../utils/fetchFromAPI";
import {useParams} from "react-router-dom";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        sx={{color: "white", marginBottom: "20px"}}>
        Search results for:
        <span style={{color: "#F31503"}}>{" " + searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}
