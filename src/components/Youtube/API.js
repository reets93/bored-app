import axios from "axios";

const KEY = 
            // "AIzaSyDNe-EwKY81Imo8_AyAvMBnKbvaBYFqbNs";
            "AIzaSyAdG72xSeFTf3zesij_Rztmomuamtbg9hQ";
            // "AIzaSyDGCWZu84Wo1O7MmVU6sHP67CzIOQyaz_E";
            
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: KEY
  }
});