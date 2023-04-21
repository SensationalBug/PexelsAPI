import axios from "axios";

export const getImages = async (image = "car", perPage = 50) =>
  await axios.get(`https://api.pexels.com/v1/search?query=${image}&per_page=${perPage}`, {
    headers: {
      Authorization: "V0woWKov4je3iHneyE5GEnDG7wbGze8uzns9dDvOdhPomIfOYnSugYiQ",
    },
  });
