import axios from "axios";

const KEY = "AIzaSyDGCWZu84Wo1O7MmVU6sHP67CzIOQyaz_E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: KEY
  }
});