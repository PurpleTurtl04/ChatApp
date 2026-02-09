export default function Footer() {
    return (
        <footer className='container mt-22 mb-8 mx-auto'>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
                <div className='flex flex-col items-center lg:items-start'>
                    <p className='font-poppins text-chatappblue mb-4 text-xl'>
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
                <div className='flex flex-wrap gap-30 justify-center ml-8 sm:ml-0'>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins pb-2 text-lg'>Help</h3>
                        <p className='text-chatappgray/70 text-xs'>Support</p>
                        <p className='text-chatappgray/70 text-xs'>
                            Knowledge base
                        </p>
                        <p className='text-chatappgray/70 text-xs'>Tutorials</p>
                    </div>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins pb-2 text-lg'>Features</h3>
                        <p className='text-chatappgray/70 text-xs'>
                            Screen Sharing
                        </p>
                        <p className='text-chatappgray/70 text-xs'>
                            iOS & Android Apps
                        </p>
                        <p className='text-chatappgray/70 text-xs'>
                            File Sharing
                        </p>
                        <p className='text-chatappgray/70 text-xs'>
                            User Management
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins pb-2 text-lg'>Company</h3>
                        <p className='text-chatappgray/70 text-xs'>About Us</p>
                        <p className='text-chatappgray/70 text-xs'>Careers</p>
                        <p className='text-chatappgray/70 text-xs'>
                            Contact Us
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 basis-1/3 md:basis-auto'>
                        <h3 className='font-poppins pb-2 text-lg'>
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
        </footer>
    );
}
