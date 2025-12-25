import React from "react";
import Link from "next/link";
import AddToCart from "@/components/Buttons/AddToCart";

const FoodDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Fetching the data
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const singleFood = await res.json();
  const food = singleFood.details;

  // Finding the specific food item
  //   const food = allFood.find((item) => item.id === parseInt(id));
  //  console.log({food});

  if (!food) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          Food item not found!
        </h2>
        <Link href="/" className="mt-4 text-blue-500 underline">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-block mb-6 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
      >
        ← Back to Menu
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        {/* Image Section */}
        <div className="relative h-80 md:h-full">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="p-8 flex flex-col justify-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-green-100 text-green-700 w-fit mb-4">
            {food.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {food.title}
          </h1>
          <p className="text-gray-500 text-sm mb-6 uppercase">ID: {food.id}</p>

          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gray-400 text-sm">Price</p>
              <p className="text-3xl font-extrabold text-orange-600">
                ${food.price}
              </p>
            </div>
          </div>

          <AddToCart></AddToCart>
          <p className="mt-4 text-center text-gray-400 text-xs">
            Free delivery on orders over $50
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
