import axios from "axios";

export const getHeadlineByCountry = async () => {
    try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=f463419c4e4c4ebd96549c95688e979b");
        if(res){
            console.log(res.data);
        }
    } catch (error) {
        console.log(error);
    }
};

export const fetchSearchDataApi = async (query) => {
  const API_KEY = "f463419c4e4c4ebd96549c95688e979b";
  try {
    const data = await axios.get(
      ` https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};