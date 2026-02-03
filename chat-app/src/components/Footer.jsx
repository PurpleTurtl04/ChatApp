export default function Footer() {
    return (
        <footer className='mt-22 mb-8 container'>
            <div className='flex justify-between'>
                <div className='flex flex-col justify-start mx-auto'>
                    <p className='font-poppins text-chatappblue text-xl mb-4'>
                        <span className='font-bold'>chat</span>
                        <span className='font-extralight'>app</span>
                    </p>
                    <p className='text-chatappgray/70 max-w-40 text-sm'>
                        The last team chat you will ever need.
                    </p>
                    <p className='text-chatappgray/70 text-xs pt-63'>
                        © Copyright ChatApp Inc.
                    </p>
                </div>
                <div className='flex justify-between gap-30 lg:mx-auto'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-poppins text-lg pb-2'>Help</h3>
                        <p className='text-chatappgray/70 text-xs'>Support</p>
                        <p className='text-chatappgray/70 text-xs'>
                            Knowledge base
                        </p>
                        <p className='text-chatappgray/70 text-xs'>Tutorials</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-poppins text-lg pb-2'>Features</h3>
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
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-poppins text-lg pb-2'>Company</h3>
                        <p className='text-chatappgray/70 text-xs'>About Us</p>
                        <p className='text-chatappgray/70 text-xs'>Careers</p>
                        <p className='text-chatappgray/70 text-xs'>
                            Contact Us
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-poppins text-lg pb-2'>
                            Contact Us
                        </h3>
                        <p className='text-chatappgray/70 text-xs'>
                            info@chatapp.com
                        </p>
                        <p className='text-chatappgray/70 text-xs'>
                            1-800-200-300
                        </p>
                        <p className='text-chatappgray/70 text-xs max-w-24'>
                            3500 Deer Creek Rd Palo Alto, CA
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
