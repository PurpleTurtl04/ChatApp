export default function Hero() {
    return (
        <section className='bg-chatappblue text-white'>
            <div className='flex justify-around items-center container mx-auto pb-40'>
                <div className='max-w-lg'>
                    <h1 className='text-7xl/tight font-semibold pr-10 mb-5 font-poppins'>
                        Have your best chat
                    </h1>
                    <h3 className='text-lg mb-15'>
                        Fast, easy & unlimited team chat.
                    </h3>
                    <div className='flex gap-8'>
                        <button className='bg-white hover:bg-gray-200 transition duration-200 rounded-4xl px-12 py-4 text-chatappblue'>
                            Try It Free
                        </button>
                        <button className='border rounded-4xl px-12 py-4 hover:bg-white hover:text-chatappblue transition duration-200'>
                            Get a Demo
                        </button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src='src/assets/hero.png' alt='Hero Image' />
                </div>
            </div>
        </section>
    );
}
