import React, { useState } from 'react';

export default function HamburgerMenu()  {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(
    <div className="relative">
      {/* Hamburger Icon (visible on mobile) */}
      <button
        onClick={toggleMenu}
        className="block md:hidden p-3"
        aria-label="Toggle menu"
      >
        {/* Using a simple div stack for the icon, styled with Tailwind */}
        <div className={`w-6 h-0.5 bg-chatapporange transition duration-300 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-chatapporange my-1 transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-chatapporange transition duration-300 ease-in-out ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* Menu Items (hidden by default on mobile, visible on desktop) */}
      <div
        className={`
          ${isOpen ? 'block' : 'hidden'}
          md:block
          absolute md:static top-full right-0
          bg-chatappgray/95 md:bg-transparent
          shadow-lg md:shadow-none
          p-2 md:p-0
          mt-2 md:mt-0
          rounded-md md:rounded-none
          w-48 md:w-auto
        `}
      >
        <ul className="flex flex-col w-full items-center md:items-center md:justify-around md:flex-row gap-4 md:gap-6 lg:gap-10">
          <li><a href='#' className='transition duration-150 hover:text-chatapporange'>Product</a></li>
          <li><a href='#' className='transition duration-150 hover:text-chatapporange'>Services</a></li>
          <li><a href='#' className='transition duration-150 hover:text-chatapporange'>Contact</a></li>
          <li><a href='#' className='transition duration-150 hover:text-chatapporange'>Log In</a></li>
          <button className='hover:text-chatappblue rounded-4xl bg-white/20 px-6 py-3 transition duration-300 ease-in-out hover:bg-white min-w-14'>
            Try It Free
            </button>
        </ul>
      </div>
    </div>
  )
}

// COPIED CODE
// import React, { useState } from 'react';

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Hamburger Icon (visible on mobile) */}
//       <button
//         onClick={toggleMenu}
//         className="block lg:hidden p-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//         aria-label="Toggle menu"
//       >
//         {/* Using a simple div stack for the icon, styled with Tailwind */}
//         <div className={`w-6 h-0.5 bg-gray-600 transition duration-300 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
//         <div className={`w-6 h-0.5 bg-gray-600 my-1 transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
//         <div className={`w-6 h-0.5 bg-gray-600 transition duration-300 ease-in-out ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
//       </button>

//       {/* Menu Items (hidden by default on mobile, visible on desktop) */}
//       <div
//         className={`
//           ${isOpen ? 'block' : 'hidden'}
//           lg:block
//           absolute lg:static top-full left-0 right-0
//           bg-white lg:bg-transparent
//           shadow-lg lg:shadow-none
//           p-4 lg:p-0
//           mt-2 lg:mt-0
//           rounded-md lg:rounded-none
//         `}
//       >
//         <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
//           <li><a href="#home" className="text-gray-600 hover:text-indigo-600 transition duration-150">Home</a></li>
//           <li><a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-150">About</a></li>
//           <li><a href="#services" className="text-gray-600 hover:text-indigo-600 transition duration-150">Services</a></li>
//           <li><a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-150">Contact</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HamburgerMenu;
