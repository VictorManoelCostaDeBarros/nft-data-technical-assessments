import { useMemo } from "react";
import { useAppSelector } from "../../store";
import './styles.scss'

export function StarRating () {
  const minOriginal = 0;
  const maxOriginal = 100;
  const minRating = 1;
  const maxRating = 5;

  const metascore = useAppSelector(state => state.movie.movie?.metascore)

  const rating = useMemo(() => {
    return ((Number(metascore) - minOriginal) * (maxRating - minRating) / (maxOriginal - minOriginal)) + minRating;
  }, [metascore])

  return (
    <div className="star-rating">
      { [1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className={star <= rating ? 'star selected' : 'star'}
          >
            ★
          </span>
        )
      })}
    </div>
  );
}
