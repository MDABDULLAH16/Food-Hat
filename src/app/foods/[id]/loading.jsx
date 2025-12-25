import React from "react";

const Loading = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button Skeleton */}
      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Image Skeleton */}
        <div className="h-80 md:h-112.5 bg-gray-200 animate-pulse"></div>

        {/* Info Section Skeleton */}
        <div className="p-8 flex flex-col justify-center">
          {/* Category Badge */}
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse mb-4"></div>

          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse mb-6"></div>

          {/* Price Section */}
          <div className="mb-8">
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Button */}
          <div className="h-14 w-full bg-gray-200 rounded-xl animate-pulse"></div>

          {/* Footer text */}
          <div className="h-3 w-40 bg-gray-100 rounded animate-pulse mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
