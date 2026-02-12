function Footer() {
    return (
        <footer className='container mx-auto mt-15 mb-8 md:mt-22'>
            <div className='flex flex-col justify-between gap-8 lg:flex-row lg:gap-0'>
                <div className='flex flex-col items-center lg:items-start'>
                    <p className='font-poppins text-chatappblue mb-1 text-xl lg:mb-4'>
                        <span className='font-bold'>chat</span>
                        <span className='font-extralight'>app</span>
                    </p>
                    <p className='text-chatappgray/70 max-w-40 text-center text-sm lg:text-left'>
                        The last team chat you will ever need.
                    </p>
                </div>
                <div className='ml-8 flex flex-wrap justify-center gap-12 sm:ml-0 sm:justify-end md:gap-30'>
                    <div className='flex basis-1/3 flex-col gap-3 md:basis-auto'>
                        <h3 className='font-poppins text-lg md:pb-2'>Help</h3>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            Support
                        </a>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            Knowledge base
                        </a>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            Tutorials
                        </a>
                    </div>
                    <div className='flex basis-1/3 flex-col gap-3 md:basis-auto'>
                        <h3 className='font-poppins text-lg md:pb-2'>
                            Features
                        </h3>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            Screen Sharing
                        </a>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            iOS & Android Apps
                        </a>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            File Sharing
                        </a>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            User Management
                        </a>
                    </div>
                    <div className='flex basis-1/3 flex-col gap-3 md:basis-auto'>
                        <h3 className='font-poppins text-lg md:pb-2'>
                            Company
                        </h3>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            About Us
                        </a>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            Careers
                        </a>
                        <a
                            href='#'
                            className='text-chatappgray/70 hover:text-chatapporange text-xs transition duration-150'
                        >
                            Contact Us
                        </a>
                    </div>
                    <div className='flex basis-1/3 flex-col gap-3 md:basis-auto'>
                        <h3 className='font-poppins text-lg md:pb-2'>
                            Contact Us
                        </h3>
                        <p className='text-chatappgray/70 text-xs'>
                            info@chatapp.com
                        </p>
                        <p className='text-chatappgray/70 text-xs'>
                            1-800-200-300
                        </p>
                        <p className='text-chatappgray/70 max-w-24 text-xs'>
                            3500 Deer Creek Rd Palo Alto, CA
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-chatappgray/70 pt-15 text-center text-xs md:pt-48 md:text-left'>
                    © Copyright ChatApp Inc.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
