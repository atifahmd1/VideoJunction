import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {Link} from "react-router-dom";

import {demoProfilePicture} from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop}) => {
  console.log(channelDetail);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {xs: "356px", md: "300px"},
        height: 320,
        margin: "auto",
        //marginTop: marginTop,       //or when name same we can write just once
        marginTop,
      }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "centre",
            textAlign: "center",
            color: "#fff",
          }}>
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              margin: "auto",
              mb: 2,
              color: "#e3e3e3",
            }}
          />
          <Typography
            variant="h6"
            fontWeight={"bold"}
            color={"#FFF"}
            sx={{mt: "10px"}}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 12, color: "gray", ml: "5px"}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              variant="subtitle2"
              fontWeight={"bold"}
              color={"gray"}
              sx={{mt: "5px"}}>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
