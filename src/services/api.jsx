import axios from "axios";

export const getHeadlineByCountry = async () => {
    try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=5d2290f22f2c4823ba9a4fafd642ef31"
        );
        if(res){
            console.log(res.data);
        }
    } catch (error) {
        console.log(error);
    }
};

export const fetchSearchDataApi = async (query) => {
  const API_KEY = "5d2290f22f2c4823ba9a4fafd642ef31";
  try {
    const data = await axios.get(
      ` https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};