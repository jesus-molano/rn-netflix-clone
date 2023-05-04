import { useEffect, useState } from "react";

const IMAGE_URL = process.env.IMAGE_URL;

export const useGetImage = (imgPath) => {
  const [image, setImage] = useState('')
  const url = `${IMAGE_URL}/${imgPath}`;

  useEffect(()=>{
    fetch(url)
      .then(res => setImage(res.url))
      .catch(err => console.log(err))
  },[url])

  return {
    image
  };
};