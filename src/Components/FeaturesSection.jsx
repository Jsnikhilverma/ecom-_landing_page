import collection from "../assets/collection.png";
import homepage from "../assets/homepage.png";
import sidebarhome from "../assets/sidebarhome.png";
import voucher from "../assets/voucher.png";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-10 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Shopping
          </h2>
          <p className="text-lg text-gray-600">
            Our app is designed to make your shopping experience seamless,
            enjoyable, and rewarding.
          </p>
        </div>
        <div className="text-center max-w-8xl mx-auto mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                img: collection,
                title: "Exclusive Deals & Vouchers",
                desc: "Access special discounts and promotions available only to app users. Save big on your favorite products.",
              },
              {
                img: homepage,
                title: "Intuitive Shopping Experience",
                desc: "Browse products with ease, filter by categories, and find exactly what you are looking for in seconds.",
              },
              {
                img: sidebarhome,
                title: "Personalized User Experience",
                desc: "Get recommendations based on your preferences and shopping history for a tailored experience.",
              },
              {
                img: voucher,
                title: "Personalized User Experience",
                desc: "Get recommendations based on your preferences and shopping history for a tailored experience.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex justify-center shadow-lg">
                <div className="bg-gray-200 p-4 rounded-lg w-full max-w-xl sm:max-w-sm md:w-80">
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-3 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-1 mt-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm">{feature.desc}</p>
                  <div className="bg-white rounded-md p-2 shadow-sm mt-5">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
