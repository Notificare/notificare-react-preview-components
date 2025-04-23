import './StarRating.css';

type StarRatingProps = {
  rating: number;
};

export default function StarRating(props: StarRatingProps) {
  const { rating } = props;

  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FullStar key={i} />);
    } else if (i - 0.5 <= rating) {
      stars.push(<HalfStar key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }

  return <div className="notificare__push__ios__store__app-ui__star-rating">{stars}</div>;
}

const FullStar = () => (
  <svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);

const HalfStar = () => (
  <svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <defs>
      <linearGradient id="halfGrad">
        <stop offset="50%" stopColor="#1e3050" />
        <stop offset="50%" stopColor="#ccc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#halfGrad)"
      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
    />
  </svg>
);

const EmptyStar = () => (
  <svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path
      fill="#EAEAEA"
      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
    />
  </svg>
);
