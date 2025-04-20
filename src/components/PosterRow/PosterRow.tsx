import "./PosterRow.css";
import { useEffect, useState } from "react";
import instance from "../../api/axios";
import { MovieProps } from "../../types";
import { ORIGINAL_IMG_URL } from "../../api/urls";

function PosterRow(props: { title: string; isSmall?: boolean; url: string }) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    instance.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, [props.url]);

  return (
    <div className="row">
      <h2 className="header">{props.title}</h2>
      <div className="posters">
        {movies.map((movie, index) => {
          return (
            <img
              key={index}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${ORIGINAL_IMG_URL}${movie.backdrop_path}`}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
export default PosterRow;
