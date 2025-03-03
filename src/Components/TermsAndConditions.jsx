import Header from "./Header";
import Footer from "./Footer";
const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Terms and Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          Welcome to our application. By accessing or using our services, you
          agree to comply with and be bound by the following terms and
          conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">
          By using our services, you acknowledge that you have read and agree to
          these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          2. User Responsibilities
        </h2>
        <p className="text-gray-600 mb-4">
          You agree to use our services lawfully and responsibly, without
          engaging in any activities that may harm the platform or other users.
        </p>

        <h2 className="text-2xl font-semibold mt-4">3. Privacy Policy</h2>
        <p className="text-gray-600 mb-4">
          We respect your privacy and handle your data in accordance with our
          Privacy Policy. Please review it to understand how we collect and use
          your information.
        </p>

        <h2 className="text-2xl font-semibold mt-4">4. Termination</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to suspend or terminate your access to our
          services if you violate these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-4">5. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We may update these terms from time to time. Continued use of our
          services constitutes your acceptance of any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-4">6. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about these Terms and Conditions, please
          contact us at support@example.com.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
