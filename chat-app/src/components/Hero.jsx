export default function Hero() {
    return (
        <section className='bg-chatappblue text-white'>
            <div className='flex flex-col-reverse md:flex-row justify-around items-center container mx-auto pb-20 md:pb-40'>
                <div className='max-w-lg text-center md:text-left'>
                    <div className="flex flex-col">
                        <h1 className='lg:text-7xl/tight md:text-6xl/tight text-4xl/tight font-semibold md:pr-10 mb-5 font-poppins'>
                            Have your best chat
                        </h1>
                        <h3 className='text-lg md:ml-1 mb-10 md:mb-15'>
                            Fast, easy & unlimited team chat.
                        </h3>
                    </div>
                    <div className='flex justify-center md:justify-start gap-8'>
                        <button className='bg-white hover:bg-gray-200 transition duration-200 rounded-4xl lg:px-12 px-6 py-4 text-chatappblue'>
                            Try It Free
                        </button>
                        <button className='group relative overflow-hidden border-2 rounded-4xl lg:px-12 px-6 py-4 text-white'>
                            <span className='absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full'></span>
                            <span className='relative z-10 group-hover:text-chatappblue'>
                                Get a Demo
                            </span>
                        </button>
                    </div>
                </div>
                <div className='flex justify-center max-w-md md:max-w-none pb-10 md:pb-0'>
                    <img src='src/assets/hero.png' alt='Hero Image' />
                </div>
            </div>
        </section>
    );
}
