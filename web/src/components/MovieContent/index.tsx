import { useAppSelector } from "../../store";
import { Button } from "../Button";
import { StarRating } from "../StarRating";

import './styles.scss'

export function MovieContent() {
  const movie = useAppSelector(state => state.movie.movie)


  return (
    <div className="movie-content">
      <div className="info">
        <h1>{movie?.title}</h1>
        <p>{movie?.plot}</p>

        <p><strong>Actor</strong> {movie?.actors}</p>

        <div className="rating">
          <strong>Review</strong>
          <StarRating />
        </div>

        <Button>
          Favorite ❤
        </Button>
      </div>

      <div className="poster">
        <img src={movie?.poster} alt={movie?.title} />
      </div>
    </div>
  )
}