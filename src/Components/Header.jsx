import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">Gemstore</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link
            to="#how-it-works"
            className="text-sm font-medium hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            to="#testimonials"
            className="text-sm font-medium hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            to="#pricing"
            className="text-sm font-medium hover:text-primary"
          >
            Pricing
          </Link>
          <Link to="#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition">
            Download App
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Gemstore</h1>
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-6">
              <Link
                to="#features"
                className="flex items-center gap-3 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="#how-it-works"
                className="flex items-center gap-3 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="#testimonials"
                className="flex items-center gap-3 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="#pricing"
                className="flex items-center gap-3 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="#faq"
                className="flex items-center gap-3 py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <button className="w-full bg-primary text-white px-4 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition">
                Download App
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
