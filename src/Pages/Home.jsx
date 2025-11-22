import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl text-center my-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Gadget Heaven</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore the latest tech gadgets and accessories. Find the best products for your smart devices with ease and style.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="max-w-2xl mt-10">
        <img
          src="image.png" 
          alt="Gadgets"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl text-center">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-bold text-xl mb-2">Fast Delivery</h2>
          <p className="text-gray-600">Get your gadgets delivered quickly to your doorstep.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-bold text-xl mb-2">Best Quality</h2>
          <p className="text-gray-600">We provide only high-quality products from trusted brands.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="font-bold text-xl mb-2">24/7 Support</h2>
          <p className="text-gray-600">Our support team is here to help you anytime you need.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
