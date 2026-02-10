import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
    return (
        <div className='container mx-auto flex items-center justify-between pt-10 pb-15 md:pb-36 xl:px-10'>
            <p className='font-poppins text-3xl lg:pb-2 pl-3 md:pl-0'>
                <span className='font-semibold'>chat</span>
                <span className='font-extralight'>app</span>
            </p>
            {/* <nav className='flex items-center justify-around gap-10 text-sm font-medium'>
                <a
                    className='transition duration-150 hover:text-gray-300'
                    href='#'
                >
                    Product
                </a>
                <a
                    className='transition duration-150 hover:text-gray-300'
                    href='#'
                >
                    Services
                </a>
                <a
                    className='transition duration-150 hover:text-gray-300'
                    href='#'
                >
                    Contact
                </a>
                <a
                    className='transition duration-150 hover:text-gray-300'
                    href='#'
                >
                    Log In
                </a>
                <button className='hover:text-chatappblue rounded-4xl bg-white/20 px-6 py-3 transition duration-150 hover:bg-white'>
                    Try It Free
                </button>
            </nav> */}
            <nav>
                <HamburgerMenu/>
            </nav>
        </div>
    );
}
