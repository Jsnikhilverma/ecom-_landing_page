import ecom2 from "../assets/ecom2.jpg";
import ecom3 from "../assets/ecom3.jpg";

const Details = () => {
  return (
    <div>
      {/* First Section */}
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8 bg-gray-100 mb-5">
        <div className="md:w-2/3 flex justify-center">
          <img
            src={ecom2}
            alt="FAQ Illustration"
            className="w-full sm:w-[450px] h-auto sm:h-[550px] rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 p-4">
            Gemstore – Your Ultimate Fashion Shopping Destination
          </h2>
          <p className="text-gray-600 p-2">
            Gemstore offers a seamless shopping experience with trendy
            collections for women, men, and accessories. Explore seasonal
            styles, featured products, and exclusive deals. With an intuitive
            interface, easy navigation, and secure checkout, Gemstore ensures a
            hassle-free fashion shopping journey. Stay stylish and shop the
            latest trends effortlessly!
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto p-6 flex flex-col-reverse md:flex-row items-center gap-8 bg-gray-100 mb-5">
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 p-4">
            Gemstore – Personalized Shopping Experience
          </h2>
          <p className="text-gray-600 p-2">
            Gemstore provides a user-friendly interface with seamless
            navigation. Manage your profile, track orders, explore trends, and
            customize your shopping experience with light/dark mode. Enjoy
            secure transactions and excellent support, all in one stylish app
            designed to enhance your fashion journey.
          </p>
        </div>
        <div className="md:w-2/3 flex justify-center">
          <img
            src={ecom3}
            alt="FAQ Illustration"
            className="w-full sm:w-[450px] h-auto sm:h-[550px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
