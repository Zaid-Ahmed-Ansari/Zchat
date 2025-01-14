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
      <div div className="bg-second text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-fourth">Welcome to Zchat</h1>
            <p className="text-lg md:text-xl mb-6 text-fourth">
              The ultimate chatting application to connect with your friends, family, and colleagues.
            </p>
            <Link href="/forums" className="bg-fourth text-black font-bold py-3 px-6 rounded-full ">
              Go to Forums
            </Link>
          </div>
        </div>
     

      {/* Features Section */}
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-fourth">Why Choose Zchat?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-fourth text-black p-6 rounded-3xl">
                <h3 className="text-xl font-bold mb-2 text-black">Secure Messaging</h3>
                <p>End-to-end encryption to keep your conversations private and secure.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-fourth p-6 text-black rounded-3xl">
                <h3 className="text-xl font-bold mb-2 text-black">Cross-Platform</h3>
                <p className='text-black'>Available on web, iOS, and Android for seamless communication.</p>
              </div>
            </div>
            <div className="text-center ">
              <div className="bg-fourth text-black p-6 rounded-3xl">
                <h3 className="text-xl font-bold mb-2 text-black">Customizable Themes</h3>
                <p>Personalize your chat experience with beautiful themes.</p>
              </div>
            </div>
          </div>
        </div>
      

      

      {/* Footer Section */}
      <footer className="bg-gray-800  text-white mt-10 py-6 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Zchat. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Home;

