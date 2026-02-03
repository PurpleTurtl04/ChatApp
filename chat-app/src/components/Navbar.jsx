export default function Navbar() {
    return (
        <div className='flex justify-between items-center pt-10 pb-36 xl:px-10 container mx-auto'>
            <p className='font-poppins text-3xl'>
                <span className='font-semibold'>chat</span>
                <span className='font-extralight'>app</span>
            </p>
            <nav className='font-medium text-sm flex justify-around items-center gap-10'>
                <a
                    className='hover:text-gray-300 transition duration-150'
                    href='#'
                >
                    Product
                </a>
                <a
                    className='hover:text-gray-300 transition duration-150'
                    href='#'
                >
                    Services
                </a>
                <a
                    className='hover:text-gray-300 transition duration-150'
                    href='#'
                >
                    Contact
                </a>
                <a
                    className='hover:text-gray-300 transition duration-150'
                    href='#'
                >
                    Log In
                </a>
                <button className='bg-white/20 hover:bg-white hover:text-chatappblue transition duration-150 rounded-4xl px-6 py-3'>
                    Try It Free
                </button>
            </nav>
        </div>
    );
}
