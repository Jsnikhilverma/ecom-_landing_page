import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b to-white py-16 md:py-24 w-full mx-auto  md:px-12">
      <div className="container mx-auto sm:ml-16 md:ml-16">
        <div className="flex flex-col mx-8 md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shop Smarter with Our E-commerce App
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 md:pr-12">
              Discover a seamless shopping experience with personalized
              recommendations, exclusive deals, and lightning-fast checkout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#download"
                className="bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Now
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative w-[220px] sm:w-[240px] md:w-[300px] h-[450px] sm:h-[500px] md:h-[600px] bg-gray-900 rounded-[3rem] overflow-hidden border-[8px] border-gray-900 shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage-0koDuNaUdKJDQetZ2gSrQpuKGgHBpT.png"
                alt="App Screenshot"
                width={320}
                height={440}
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
