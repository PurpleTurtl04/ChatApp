import HamburgerMenu from './HamburgerMenu';

function Navbar() {
    return (
        <div className='container mx-auto flex items-center justify-between pt-10 pb-15 md:pb-36 xl:px-10'>
            <p className='font-poppins pl-3 text-3xl md:pl-0 lg:pb-2'>
                <span className='font-semibold'>chat</span>
                <span className='font-extralight'>app</span>
            </p>
            <nav>
                <HamburgerMenu />
            </nav>
        </div>
    );
}

export default Navbar;
