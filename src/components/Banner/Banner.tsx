import "./Banner.css";
import instance from "../../api/axios";
import { useEffect, useState } from "react";
import { ORIGINAL_IMG_URL } from "../../api/urls";
import { MovieProps } from "../../types";
import { original } from "../../api/urls";

function Banner() {
  const [trending, setTrending] = useState<MovieProps>();
  useEffect(() => {
    instance.get(original).then((response) => {
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      const trendingMovie = results[randomIndex];
      setTrending(trendingMovie);
    });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${
          trending ? ORIGINAL_IMG_URL + trending.backdrop_path : ""
        })`,
      }}
    >
      <div className="content">
        <h1 className="title">{trending?.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{trending?.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}
export default Banner;
