import FullStar from '~/assets/full-star.svg';
import HalfStar from '~/assets/half-star.svg';

import './StarRating.css';

export function StarRating(props: StarRatingProps) {
  const { rating } = props;

  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FullStar key={i} className="notificare__push__ios__store__app-ui__star-icon" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<HalfStar key={i} className="notificare__push__ios__store__app-ui__star-icon" />);
    } else {
      stars.push(
        <FullStar
          key={i}
          className="notificare__push__ios__store__app-ui__star-icon notificare__push__ios__store__app-ui__star-icon--empty"
        />,
      );
    }
  }

  return <div className="notificare__push__ios__store__app-ui__star-rating">{stars}</div>;
}

export interface StarRatingProps {
  rating: number;
}
