import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import ecom1 from "../assets/ecom1.jpg";

const CallToAction = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-gray-300 mb-6">
            Download our app today and join thousands of satisfied shoppers.
          </p>

          {/* Download Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://apps.apple.com/us/app/your-app-name/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googleplay}
                className="w-20 md:w-32 lg:w-36"
                alt="Get it on the App Store"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.yourcompany.yourappname"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appstore}
                className="w-20 md:w-32 lg:w-36"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 text-end">
          <img
            src={ecom1}
            alt="App Screenshot"
            width={180}
            height={340}
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
