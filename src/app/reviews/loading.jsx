import React from "react";

const loading = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
      <div key={index}>
      <div className="max-w-md bg-white p-6 rounded-2xl border border-gray-100 animate-pulse">
        <div className="flex items-center gap-4 mb-4">
          {/* প্রোফাইল পিকচার স্কেলিটন */}
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            {/* নাম স্কেলিটন */}
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            {/* তারিখ স্কেলিটন */}
            <div className="h-3 bg-gray-100 rounded w-1/4"></div>
          </div>
        </div>

        {/* স্টার স্কেলিটন */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
          ))}
        </div>

        {/* রিভিউ টেক্সট স্কেলিটন */}
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>

        {/* নিচের লাইক বাটন স্কেলিটন */}
        <div className="border-t pt-4">
          <div className="h-4 bg-gray-100 rounded w-1/3"></div>
        </div>
                  </div>    
              </div>  
            ))}
    </div>
  );
};

export default loading;
