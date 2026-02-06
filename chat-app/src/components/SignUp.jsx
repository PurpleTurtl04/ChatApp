export default function SignUp() {
    return (
        <section className='bg-chatappblue/10 pt-15 pb-10 md:pt-31 md:pb-25'>
            <div className='flex flex-col items-center md:flex-row'>
                <div className='sm:w-3/4 md:-ml-20 md:w-3/5 lg:w-1/2'>
                    <img
                        className='lg:max-w-9/10'
                        src='src/assets/signup.png'
                        alt='People in a coffee shop'
                    />
                </div>
                <div className='mx-auto flex flex-col items-center lg:items-start lg:justify-center'>
                    <h2 className='font-poppins mt-6 mb-4 max-w-md text-center text-4xl font-medium md:mt-0 md:mb-8 lg:text-left'>
                        Perfect Solution for Small Businesses
                    </h2>
                    <p className='text-chatappgray/70 mb-8 md:mb-15'>
                        Pricing plans that fit like a glove.
                    </p>
                    <div className='flex gap-8'>
                        <button className='group bg-chatappblue relative overflow-hidden rounded-4xl px-11 py-4 text-white transition duration-300'>
                            <span class='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20'></span>
                            <span class='relative z-10'>Try It Free</span>
                        </button>
                        <button className='group text-chatappblue relative overflow-hidden rounded-4xl border-2 px-12 py-4'>
                            <span className='bg-chatappblue absolute inset-0 w-0 transition-all duration-300 ease-out group-hover:w-full'></span>
                            <span className='relative z-10 group-hover:text-white'>
                                Get a Demo
                            </span>
                        </button>
                    </div>
                    <hr className='border-chatappgray/15 mt-10 mb-8 w-41 lg:mt-23' />
                    <div className='flex flex-col items-center gap-6 lg:flex-row'>
                        <img
                            src='src/assets/stars.svg'
                            alt='star rating'
                            className='max-w-48'
                        />
                        <p className='text-chatappgray/70 max-w-60 text-center lg:max-w-68 lg:text-left'>
                            <span className='font-bold'>5,200 businesses</span>{' '}
                            use ChatApp and they rate it as{' '}
                            <span className='font-bold'>5-stars</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
