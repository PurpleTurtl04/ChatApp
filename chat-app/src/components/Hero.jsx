export default function Hero() {
    return (
        <section className='bg-chatappblue text-white'>
            <div className='container mx-auto flex flex-col-reverse items-center justify-around pb-20 md:flex-row md:pb-40'>
                <div className='max-w-lg text-center md:text-left'>
                    <div className='flex flex-col'>
                        <h1 className='font-poppins mb-5 text-4xl/tight font-semibold md:pr-10 md:text-6xl/tight lg:text-7xl/tight'>
                            Have your best chat
                        </h1>
                        <h3 className='mb-10 text-lg md:mb-15 md:ml-1'>
                            Fast, easy & unlimited team chat.
                        </h3>
                    </div>
                    <div className='flex justify-center gap-8 md:justify-start'>
                        <button className='text-chatappblue rounded-4xl bg-white px-11 py-4 transition duration-200 hover:bg-gray-200'>
                            Try It Free
                        </button>
                        <button className='group relative overflow-hidden rounded-4xl border-2 px-12 py-4 text-white'>
                            <span className='absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full'></span>
                            <span className='group-hover:text-chatappblue relative z-10'>
                                Get a Demo
                            </span>
                        </button>
                    </div>
                </div>
                <div className='flex max-w-md justify-center pb-10 md:max-w-none md:pb-0'>
                    <img src='src/assets/hero.png' alt='Hero Image' />
                </div>
            </div>
        </section>
    );
}
