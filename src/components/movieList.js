import React from "react";
import Movie from "./movie"

export default class MovieList extends React.Component {
  
  //hardcode data for movies
  render() {
    let movieOne = {
      title: "Jurassic Park",
      year: "1993",
      poster: "https://i5.walmartimages.com/asr/f854d7b0-fbe5-4c24-9d52-b103c39745b7_1.99e3a6d1c64674e64ef3dc605febe941.jpeg",
      rating: "PG-13",
      genre: "Sci-fi/Adventure",
      description:
        "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    };

    let movieTwo = {
      title: "The Truman Show",
      year: "1998",
      poster: "https://img.reelgood.com/content/movie/73a3eab4-409e-4ffa-a54f-250318c9fad8/poster-780.jpg",
      rating: "PG",
      genre: "Sci-fi/Drama",
      description:
        "An insurance salesman discovers his whole life is actually a reality TV show.",
    };

    let movieThree = {
      title: "Dune",
      year: "2021",
      poster: "https://image.tmdb.org/t/p/original/9HNZTw2D3cM1yA08FF5SeWEO9eX.jpg",
      rating: "PG-13",
      genre: "Sci-fi/Adventure, Action, Drama",
      description:
        " Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    };
    return (
      <div>
        <div className="container">
          <h1>
            Off to the Movie's We Go!
          </h1>
          <div>
            <Movie {...movieOne} />
            <br />
            <Movie {...movieTwo} />
            <br />
            <Movie {...movieThree} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}