import axios from "axios";
const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=uk&q=";
const APIKEY = "&key=AIzaSyDGCWZu84Wo1O7MmVU6sHP67CzIOQyaz_E";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
