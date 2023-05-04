import { useFetch } from "./useFetch";
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export const useGetElements = (restOfURL) => {
  const url = `${API_URL}/${restOfURL}?api_key=${API_KEY}`;
  const { data, hasError, isLoading } = useFetch(url);

  return {
    data,
    hasError,
    isLoading,
  };
};