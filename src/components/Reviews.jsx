import { useState, useEffect } from 'react';

export default function CustomerReviews() {
  const reviews = [
    { name: "Alice Johnson", review: "Great service! Highly recommend.", rating: 5 },
    { name: "Bob Smith", review: "Very satisfied with the quality.", rating: 4 },
    { name: "Charlie Davis", review: "Exceeded my expectations.", rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto mb-32 p-6 text-neutral-200 bg-neutral-950 rounded-lg shadow-md">
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex flex-col items-center justify-center text-center`}
        >
          <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
          <p className="text-yellow-500 text-lg mb-2">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
          <p className="text-neutral-200">{review.review}</p>
        </div>
      ))}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-neutral-950 rounded-full hover:bg-neutral-850"
        onClick={prevReview}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-neutral-950 rounded-full hover:bg-neutral-850"
        onClick={nextReview}
      >
        &gt;
      </button>
    </div>
  );
}
