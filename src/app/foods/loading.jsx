import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white animate-pulse"
        >
          {/* Ghost Image */}
          <div className="w-full h-48 bg-gray-200" />

          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              {/* Ghost Category */}
              <div className="h-6 w-16 bg-gray-200 rounded-full" />
              {/* Ghost Price */}
              <div className="h-6 w-12 bg-gray-200 rounded" />
            </div>

            {/* Ghost Title */}
            <div className="h-7 w-3/4 bg-gray-200 rounded mb-6" />

            <div className="flex gap-3">
              {/* Ghost Buttons */}
              <div className="flex-1 h-10 bg-gray-200 rounded-xl" />
              <div className="flex-1 h-10 bg-gray-200 rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default loading;
