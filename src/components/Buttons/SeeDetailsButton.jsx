import Link from 'next/link';
import React from 'react';

const SeeDetailsButton = ({ id }) => {
    return (
      <Link
        href={`/foods/${id}`}
        className="flex-1 text-center bg-gray-100 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
      >
        See Details
      </Link>
    );
};

export default SeeDetailsButton;