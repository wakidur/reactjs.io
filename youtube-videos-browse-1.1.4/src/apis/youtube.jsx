// import axios from "axios";

// const API_KEY = "AIzaSyD33EdRWEqbao6NUejF7D8rhrYVbvsgYyE";

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
//   params: {
//     part: "snippet",
//     maxResults: 5,
//     key: API_KEY,
//   },
//   headers: {
//     Accept: 'application/json'
//   }
// });

import axios from 'axios';

const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    ID: 12345
  },
});
