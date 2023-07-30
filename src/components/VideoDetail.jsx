import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Box, Typography, Stack} from "@mui/material";
import ReactPlayer from "react-player";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Videos} from ".";
import {CheckCircle} from "@mui/icons-material";

export default function VideoDetail() {
  const {id} = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet.statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetails) return <div>Loading...</div>;

  const {
    snippet: {title, channelId, channelTitle},
    statistics: {viewCount, likeCount},
  } = videoDetails;

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{xs: "column", md: "row"}} width={"100vw"}>
        <Box flex={1}>
          <Box sx={{width: "100%", position: "sticky", top: "86px"}}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
              width="100%"
            />
            <Typography
              variant="h5"
              width="70vw"
              fontWeight={"bold"}
              sx={{color: "white", p: "5px"}}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{color: "#fff"}}
              py={1}
              px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{sm: "subtitle1", md: "h6"}}
                  color={"white"}
                  fontWeight={"bold"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{fontSize: "12px", color: "gray", ml: "5px"}}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap={3}>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{md: 1, xs: 5}}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{overflowY: "auto", height: "90vh", flex: 2}}>
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}
