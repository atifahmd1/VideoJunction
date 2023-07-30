import {Box, Stack, Typography} from "@mui/material";
import {useState, useEffect} from "react";
import {Sidebar, Videos} from ".";

import {fetchFromAPI} from "../utils/fetchFromAPI";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack sx={{flexDirection: {xs: "column", md: "row"}}}>
      <Box
        sx={{
          overflowY: "auto",
          height: {xs: "auto", md: "85vh"},
          width: {xs: "100%", md: "12%"},
          borderRight: "1px solid #3d3d3d",
          px: {xs: 0, md: 2},
        }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          varient="body2"
          sx={{mt: 1.5, color: "#fff"}}>
          VideoJunction © 2023. All rights reserved.
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{color: "white"}}>
          {selectedCategory} <span style={{color: "#F31503"}}>Videos</span>
          <Videos videos={videos} />
        </Typography>
      </Box>
    </Stack>
  );
}
