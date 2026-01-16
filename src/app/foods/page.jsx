import CartItems from "@/components/CartItems/CartItems";
import FoodCard from "@/components/FoodCard";
import SearchInput from "@/components/SearchInput";
import React from "react";

const getFoods = async (search) => {
  const result = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
  );
  const res = await result.json();
  const foods = res.foods || [];
  // console.log(foods);
  return foods;
};

const Foods = async ({ searchParams }) => {
  const { search='' } = await searchParams;
  console.log(search);
  
  const foods = await getFoods(search);
  console.log(foods);
  return (
    <div>
      <SearchInput></SearchInput>
      <h2 className="text-2xl font-semibold mb-4">
        Random Food Item {foods.length}
      </h2>
      <div className="flex gap-4">
        <div className=" flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div key={food.id}>
            <FoodCard food={food} key={food.id} />
          </div>
        ))}
        </div>
        <div className=" border">
          <h1>Cart Items</h1>
          <hr />
<CartItems></CartItems>
        </div>
</div>
      
    </div>
  );
};

export default Foods;
