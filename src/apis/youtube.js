import axios from "axios";

const KEY = "AIzaSyDJTQgM66F4__L69N4zJfq9IkBvG8CDl8Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
