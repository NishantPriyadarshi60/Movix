import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TBDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWQzYjdhZTc2ZDU5YmEyYmUyMDVjNzI5MzBmNjc4NiIsInN1YiI6IjY1NjRjYTgzNzA2ZTU2MDExYjRiNWM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRn2jX5ZLtt0el6sMe6eLa6cfwFWfyqS03DXykJoKew";

const headers = {
    Authorization: "bearer " + TBDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}