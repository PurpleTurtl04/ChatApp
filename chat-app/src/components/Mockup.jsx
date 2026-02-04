export default function Mockup() {
    return (
        <section className='flex flex-col mx-auto container items-center mt-20 md:mt-23 mb-15 md:mb-25'>
            <h2 className='text-4xl font-poppins font-medium mb-5 md:mb-10'>
                Instant Team Chats
            </h2>
            <p className='text-chatappgray/70 max-w-lg text-center mx-4'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa.
            </p>
            <div className="overflow-x-auto flex items-start">
                <img src='src/assets/mockup.jpg' alt='Chat App Mockup' />
            </div>
        </section>
    );
}
