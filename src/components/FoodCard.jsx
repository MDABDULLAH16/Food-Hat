import Link from "next/link";
import SeeDetailsButton from "./Buttons/SeeDetailsButton";
import AddToCart from "./Buttons/AddToCart";

export default function FoodCard({ food }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:scale-[1.02] transition-transform">
      {/* The Food Image */}
      <img
        className="w-full h-48 object-cover"
        src={food.foodImg}
        alt={food.title}
      />

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
            {food.category}
          </span>
          <span className="text-lg font-bold text-gray-800">৳
            {food.price}</span>
        </div>

        <h2 title={food.title} className="text-xl font-bold text-gray-900 mb-4 truncate  ">{food.title}</h2>

        <div className="flex gap-3">
          {/* Button 1: See Details (The Teleportation Door) */}
         <AddToCart item={food}></AddToCart>

          {/* Button 2: Add to Cart */}
         <SeeDetailsButton id={food.id} key={food.id}></SeeDetailsButton>
        </div>
      </div>
    </div>
  );
}
