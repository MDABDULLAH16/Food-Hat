import React from "react";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";

const ReviewCard = ({ reviewDetails }) => {
  const { user, photo, rating, review, likes, date } = reviewDetails;

  // তারিখ ফরম্যাট করার জন্য
  let formattedDate = new Date(date).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div   className="max-w-md bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {/* ইউজার ইমেজ */}
        {/* <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
        /> */}
        <Image
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
          width={48}
          height={48}
        />
        <div>
          <h4 className="font-bold text-gray-800 text-lg">{user}</h4>
          <p className="text-gray-400 text-xs">{formattedDate}</p>
        </div>
      </div>

      {/* রেটিং স্টারস */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* রিভিউ টেক্সট */}
      <p className="text-gray-600 leading-relaxed mb-4 italic">"{review}"</p>

      {/* লাইক সেকশন */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors">
          <ThumbsUp size={18} />
          <span className="text-sm font-medium">
            {likes?.length || 0} জন পছন্দ করেছেন
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
