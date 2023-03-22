import axios from "axios";

// youtube API keys 
const KEY =
  // "AIzaSyDNe-EwKY81Imo8_AyAvMBnKbvaBYFqbNs";
  "AIzaSyAdG72xSeFTf3zesij_Rztmomuamtbg9hQ";
// "AIzaSyDGCWZu84Wo1O7MmVU6sHP67CzIOQyaz_E";
//
//"AIzaSyCeXpc-R0ZBzZttfZsRtMFysAmK9xPhheQ"; "DO NOT USE" Keep this one for the presentation


// axios api requesst with the parameters            
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: KEY
  }
});