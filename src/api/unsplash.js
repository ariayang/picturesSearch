import axios from "axios";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
//const unSplashKey = process.env.REACT_APP_UNSPLASH_KEY;
const authorize = "Client-ID " + process.env.REACT_APP_UNSPLASH_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: authorize,
  },
});

// const unsplash = async (term) => {
  
//   const response = await axios.get("https://api.unsplash.com/search/photos", {
//     params: { query: term },
//     headers: {
//       Authorization: authorize,
//     },
//   }); 
//   this.setState({ images: response.data.results });
// };

// export default unsplash;