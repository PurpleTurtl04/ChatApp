import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Mockup from './components/Mockup';
import SignUp from './components/SignUp';

function App() {
    return (
        <div className='font-roboto'>
            <header className='bg-chatappblue text-white'>
                <Navbar />
            </header>
            <main>
                <Hero />
                <Mockup />
                <SignUp />
            </main>
            <Footer />
        </div>
    );
}

export default App;
