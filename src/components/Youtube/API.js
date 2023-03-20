import axios from "axios";

const KEY = "AIzaSyDNe-EwKY81Imo8_AyAvMBnKbvaBYFqbNs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: KEY
  }
});