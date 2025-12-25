import FoodCard from '@/components/FoodCard';
import React from 'react';

const Foods = async () => {
    const result = await fetch(' https://taxi-kitchen-api.vercel.app/api/v1/foods/random')
    const res = await result.json() ;
    const foods = res.foods || [];

    
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Random Food Item {foods.length}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {foods.map((food) => (
                    <div key={food.id}>
                        <FoodCard food={food} key={food.id} />
                    </div>
                ))}
            </div>
        
        </div>
    );
};

export default Foods;