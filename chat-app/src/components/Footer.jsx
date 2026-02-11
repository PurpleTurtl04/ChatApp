function Footer() {
    return (
        <footer className='container mt-15 md:mt-22 mb-8 mx-auto'>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
                <div className='flex flex-col items-center lg:items-start'>
                    <p className='font-poppins text-chatappblue mb-1 lg:mb-4 text-xl'>
                        <span className='font-bold'>chat</span>
                        <span className='font-extralight'>app</span>
                    </p>
                    <p className='text-chatappgray/70 max-w-40 text-sm text-center lg:text-left'>
                        The last team chat you will ever need.
                    </p>
                    {/* <p className='text-chatappgray/70 pt-63 text-xs'>
                        © Copyright ChatApp Inc.
                    </p> */}
                </div>
                <div className='flex flex-wrap gap-12 md:gap-30 justify-center sm:justify-end ml-8 sm:ml-0'>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins md:pb-2 text-lg'>Help</h3>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>Support</a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            Knowledge base
                        </a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>Tutorials</a>
                    </div>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins md:pb-2 text-lg'>Features</h3>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            Screen Sharing
                        </a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            iOS & Android Apps
                        </a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            File Sharing
                        </a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            User Management
                        </a>
                    </div>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins md:pb-2 text-lg'>Company</h3>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>About Us</a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>Careers</a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            Contact Us
                        </a>
                    </div>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins md:pb-2 text-lg'>
                            Contact Us
                        </h3>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            info@chatapp.com
                        </a>
                        <a href="#" className='text-chatappgray/70 text-xs transition duration-150 hover:text-chatapporange'>
                            1-800-200-300
                        </a>
                        <a href="#" className='text-chatappgray/70 max-w-24 text-xs transition duration-150 hover:text-chatapporange'>
                            3500 Deer Creek Rd Palo Alto, CA
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-chatappgray/70 text-center md:text-left pt-15 md:pt-48 text-xs'>
                        © Copyright ChatApp Inc.
                    </p>
            </div>
        </footer>
    );
}

export default Footer