'use client'
import React from 'react';

const SearchInput = () => {
    const handleSearch =(e) => {
        e.preventDefault()
        const value = e.target.name.value;
        console.log(value);
        

    }
    return (
        <div>
            <form onSubmit={handleSearch} >
                <input className=' w-2xl  px-2 py-3 border-2 rounded-2xl ' name='name' type="text" placeholder='Search for food' />
<input className='bg-amber-400 text-black rounded-2xl px-2 py-3' type="submit" value="Search" />            </form>
        </div>
    );
};

export default SearchInput;