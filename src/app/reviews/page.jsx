import ReviewCard from "@/components/ReviewCard";
import { Anek_Bangla } from "next/font/google";

// Move this outside the component
const anek = Anek_Bangla({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap", // Helps with performance
});

export const metadata = {
  title: "All Reviews",
  description: "Best Fast Food in NoaKhali",
};

const Reviews = async () => {
  const res = await fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews");
  const reviewsData = await res.json();
  const reviews = reviewsData.reviews || [];

  return (
    <div
      className={`${anek.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
    >
      {reviews.map((reviewDetails) => (
        <ReviewCard key={reviewDetails.id} reviewDetails={reviewDetails} />
      ))}
    </div>
  );
};

export default Reviews;
