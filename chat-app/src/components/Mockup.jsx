export default function Mockup() {
    return (
        <section className='container mt-15 mb-10 flex flex-col sm:mx-auto sm:items-center md:mt-23 md:mb-25'>
            <h2 className='font-poppins mb-5 text-center text-4xl font-medium md:mb-10'>
                Instant Team Chats
            </h2>
            <p className='text-chatappgray/70 mx-4 text-center sm:max-w-lg'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa.
            </p>
            <div className='flex min-w-xl items-start'>
                <img src='src/assets/mockup.jpg' alt='Chat App Mockup' />
            </div>
        </section>
    );
}
