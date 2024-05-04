import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmYwZmJkZjE4NWY2NzZjYTEyZjQwMjFjMDczMzdiNyIsInN1YiI6IjY2MzVlNjlkZTkyZDgzMDEyN2QzMWJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bik4urvJd0SXlot4xbkTj7q25wq_XDhIvZWaGykqetA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
        console.log(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col gap-20 bg-black ">
      {data.map((item) => (
        <MovieCard
          key={item.id} // Add key prop
          name={item.original_title}
          image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          image2={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          desc ={item.overview}
          release={item.release_date}
        />
        
      ))}
    </div>
  );
}
