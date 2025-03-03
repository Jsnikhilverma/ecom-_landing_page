import avtar from "../assets/avtar.png";

const Testimonials = () => {
  return (
    <div className="text-center p-6 md:p-10 bg-white mx-4 md:mx-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        What Our Users Say
      </h2>
      <p className="text-gray-600 mb-6 md:mb-8">
        Do not just take our word for it. Here is what our users have to say
        about their experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <div className="flex justify-center mb-4">
            <span className="text-yellow-400 text-2xl md:text-3xl">★★★★★</span>
          </div>
          <p className="text-gray-700 text-left">
            This app has completely changed how I shop. The personalized
            recommendations are spot on, and I love the exclusive deals!
          </p>
          <div className="mt-4 flex items-center gap-4 md:gap-8">
            <img
              src={avtar}
              alt="Sarah Johnson"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <div>
              <h3 className="font-bold text-sm md:text-base">Sarah Johnson</h3>
              <p className="text-gray-500 text-xs md:text-sm">
                Regular Shopper
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <div className="flex justify-center mb-4">
            <span className="text-yellow-400 text-2xl md:text-3xl">★★★★★</span>
          </div>
          <p className="text-gray-700 text-left">
            The user interface is incredibly intuitive. I can find what I am
            looking for in seconds, and checkout is a breeze. Highly recommend!
          </p>
          <div className="mt-4 flex items-center gap-4 md:gap-8">
            <img
              src={avtar}
              alt="Michael Chen"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <div>
              <h3 className="font-bold text-sm md:text-base">Michael Chen</h3>
              <p className="text-gray-500 text-xs md:text-sm">
                Tech Enthusiast
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <div className="flex justify-center mb-4">
            <span className="text-yellow-400 text-2xl md:text-3xl">★★★★★</span>
          </div>
          <p className="text-gray-700 text-left">
            As someone who shops frequently, this app saves me so much time. The
            wishlist feature is perfect for keeping track of items I want to buy
            later.
          </p>
          <div className="mt-4 flex items-center gap-4 md:gap-8">
            <img
              src={avtar}
              alt="Emma Rodriguez"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <div>
              <h3 className="font-bold text-sm md:text-base">Emma Rodriguez</h3>
              <p className="text-gray-500 text-xs md:text-sm">
                Fashion Blogger
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
