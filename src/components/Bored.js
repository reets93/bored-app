import React, {useState} from "react";
import Axios from "axios";

function Bored() {
const [activity, setActivity] = useState("");

let query = "social";
const getActivity = () => {
const BASEURL = "http://www.boredapi.com/api/activity?type=";
  Axios.get(BASEURL + query)
  .then((response)=>{
    console.log(response);
    setActivity(response.data.activity);
  });
}
  return(
    <div> This is the result 
      <button onClick={getActivity}>Get an activity</button>
      {activity}
    </div>
  ) ;
}
export default Bored ;