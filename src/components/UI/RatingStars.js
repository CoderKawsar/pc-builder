function RatingStars({ rating }) {
  const integerRating = parseInt(rating);
  const fractionalRating = rating - integerRating;
  const renderStar = (index) => {
    if (index + 1 <= integerRating) {
      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8.705 1.054a1 1 0 011.59 0l1.56 3.175a1 1 0 00.898.547l3.504.508a1 1 0 01.556 1.705l-2.537 2.473a1 1 0 00-.292.888l.598 3.496a1 1 0 01-1.45 1.056L10 14.486l-3.125 1.645a1 1 0 01-1.45-1.055l.598-3.497a1 1 0 00-.292-.887L1.51 6.033a1 1 0 01.556-1.705l3.504-.508a1 1 0 00.899-.546l1.56-3.176z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else if (fractionalRating > 0) {
      const starWidth = 20 * fractionalRating;
      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <mask id={`star-mask-${index}`}>
            <rect x="0" y="0" width={starWidth} height="20" fill="white" />
          </mask>
          <path
            fillRule="evenodd"
            d="M8.705 1.054a1 1 0 011.59 0l1.56 3.175a1 1 0 00.898.547l3.504.508a1 1 0 01.556 1.705l-2.537 2.473a1 1 0 00-.292.888l.598 3.496a1 1 0 01-1.45 1.056L10 14.486l-3.125 1.645a1 1 0 01-1.45-1.055l.598-3.497a1 1 0 00-.292-.887L1.51 6.033a1 1 0 01.556-1.705l3.504-.508a1 1 0 00.899-.546l1.56-3.176z"
            clipRule="evenodd"
            mask={`url(#star-mask-${index})`}
          />
        </svg>
      );
    }
    return null;
  };
  return (
    <div className="flex items-center mt-2">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, index) => renderStar(index))}
      </div>
      {/* <p className="ml-2 text-sm text-gray-500">{rating.toFixed(1)} Stars</p> */}
    </div>
  );
}

export default RatingStars;
