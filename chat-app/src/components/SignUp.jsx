export default function SignUp() {
    return (
        <section className='bg-chatappblue/10 pt-31 pb-25'>
            <div className='flex'>
                <div className='w-1/2'>
                    <img
                        className='lg:max-w-9/10'
                        src='src/assets/signup.png'
                        alt='People in a coffee shop'
                    />
                </div>
                <div className='flex flex-col md:mx-auto justify-center'>
                    <h2 className='text-4xl font-poppins font-medium mb-8 max-w-md'>
                        Perfect Solution for Small Businesses
                    </h2>
                    <p className='text-chatappgray/70 mb-15'>
                        Pricing plans that fit like a glove.
                    </p>
                    <div className='flex gap-8'>
                        <button className='bg-chatappblue rounded-4xl px-11 py-4 text-white'>
                            Try It Free
                        </button>
                        <button className='border border-chatappblue text-chatappblue rounded-4xl px-11 py-4'>
                            Get a Demo
                        </button>
                    </div>
                    <hr className='border-chatappgray/15 mt-23 mb-8 w-41' />
                    <div className='flex gap-6'>
                        <img src='src/assets/stars.svg' alt='star rating' />
                        <p className='text-chatappgray/70 lg:max-w-68'>
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
