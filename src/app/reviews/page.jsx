import ReviewCard from "@/components/ReviewCard";
import React from "react";

export const metadata = {
  title: "All Reviews",
  description: "Best Fast Food in NoaKhali",
};
const Reviews = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/reviews",
     
  );
  const reviewsData = await res.json();
    const reviews = reviewsData.reviews || [];
    // console.log({reviews});
    
 

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {reviews.map((reviewDetails) => (
        <ReviewCard
          key={reviewDetails.id}
          reviewDetails={reviewDetails}
        ></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;
