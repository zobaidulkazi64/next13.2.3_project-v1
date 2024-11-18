import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import React from 'react';

// Data array for options
const ChooseOneData = [
  {
    id: 1,
    name: "Front-end",
    imageLink: "https://github.com/zobkazi/zobkazi.github.io/blob/production/src/assets/images/front-end-64.png?raw=true",
    href: "/projects/front-end"
  },
  {
    id: 2,
    name: "Back-end",
    imageLink: "https://github.com/zobkazi/zobkazi.github.io/blob/production/src/assets/images/backend.png?raw=true",
    href: "/projects/back-end"
  },
  {
    id: 3,
    name: "Full-stack",
    imageLink: "https://github.com/zobkazi/zobkazi.github.io/blob/production/src/assets/images/full-stack-web.png?raw=true",
    href: "/projects/full-stack"
  }
];

const ChooseOne = () => {
  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl text-purple-500 text-center font-bold my-8">
        Choose One of the following
      </h1>
      
      {/* Options Container */}
      <div className="flex items-center justify-center">
        <div className="w-[300px] px-4 py-5 flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
          {/* Legend */}
          <legend className="text-xl font-semibold mb-3 select-none">Choose One</legend>
          
          {/* Dynamic Options */}
          {ChooseOneData.map((option) => (
            <Link href={option.href} key={option.id}>
              <span>
                <label
                  htmlFor={option.name}
                  className="font-medium h-14 relative hover:bg-purple-800 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-purple-700 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                >
                  {/* Image */}
                  <div className="w-5">
                    <Image 
                      loading='lazy'
                      src={option.imageLink} 
                      alt={`${option.name} icon`} 
                      width={30} 
                      height={30} 
                    />
                  </div>
                  {/* Option Name */}
                  {option.name}
                  
                  {/* Radio Button */}
                  <input
                    type="radio"
                    name="status"
                    className="absolute right-3 w-4 h-4"
                    id={option.name}
                    aria-label={`Choose ${option.name}`}
                  />
                </label>
              </span>
            </Link>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default ChooseOne;
