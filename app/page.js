// import Image from "next/image";
import { Metadata } from 'next'
import Link from 'next/link';
 
export const metadata = {
  title: 'Home - Zchat',
  description: 'Zchat helps you to connect to the people of your choice.',
}

const Home = () => {
  return (
    <div className="bg-second min-h-screen">
      {/* Hero Section */}
      <section className="bg-second text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-fourth">Welcome to Zchat</h1>
            <p className="text-lg md:text-xl mb-6 text-fourth">
              The ultimate chatting application to connect with your friends, family, and colleagues.
            </p>
            <Link href="/signup" className="bg-third text-fourth font-bold py-3 px-6 rounded-full hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-fourth">Why Choose Zchat?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-third p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Secure Messaging</h3>
                <p>End-to-end encryption to keep your conversations private and secure.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-third p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-fourth">Cross-Platform</h3>
                <p className='text-fourth'>Available on web, iOS, and Android for seamless communication.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-third p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-fourth">Customizable Themes</h3>
                <p>Personalize your chat experience with beautiful themes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Zchat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

