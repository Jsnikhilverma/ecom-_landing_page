import Header from "./Header";
import Footer from "./Footer";

const PolicyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

        <p className="text-gray-600 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our services.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We collect personal and non-personal information that you provide when
          using our services, including your name, email address, and usage
          data.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use your information to improve our services, personalize your
          experience, and communicate with you about updates and offers.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We do not sell or rent your personal information. However, we may
          share data with trusted partners to help provide and improve our
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-4">4. Data Security</h2>
        <p className="text-gray-600 mb-4">
          We implement security measures to protect your data from unauthorized
          access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-4">5. Your Choices</h2>
        <p className="text-gray-600 mb-4">
          You can review, update, or delete your personal information by
          contacting us. You may also opt out of promotional emails.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Your continued
          use of our services constitutes your acceptance of the changes.
        </p>

        <h2 className="text-2xl font-semibold mt-4">7. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us
          at support@example.com.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyPolicy;
