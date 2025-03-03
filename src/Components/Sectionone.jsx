import intro1 from "../assets/intro1.png";
import intro2 from "../assets/intro2.png";
import intro3 from "../assets/intro3.png";
import ecom5 from "../assets/ecom5.png";
import discover from "../assets/discover.png";

const Sectionone = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Fashion Discovery & Trends: Explore Your Style
        </p>
        <div className="grid sm:flex sm:flex-wrap justify-center max-w-8xl mx-auto items-center gap-2 sm:gap-4 md:gap-16">
          {[intro1, intro2, intro3, ecom5, discover].map((image, index) => (
            <div key={index} className="border border-gray-300 p-2 sm:p-3">
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className=" md:h-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectionone;
