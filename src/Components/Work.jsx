const Work = () => {
  const steps = [
    {
      number: "1",
      title: "Download & Sign Up",
      description:
        "Download our app from the App Store or Google Play and create your account in seconds.",
    },
    {
      number: "2",
      title: "Browse & Shop",
      description:
        "Explore thousands of products across different categories and add items to your cart.",
    },
    {
      number: "3",
      title: "Checkout & Enjoy",
      description:
        "Complete your purchase with our secure checkout and track your delivery in real-time.",
    },
  ];
  return (
    <div>
      <section id="how-it-works" className="py-20 bg-gray-200 mx-4 md:mx-30">
        <div className="container  mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our App Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in minutes and enjoy a seamless shopping experience
            </p>
          </div>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-full sm:w-1/3"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-black text-white text-lg font-bold rounded-full">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
                  <p className="text-gray-500 mt-2 max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
