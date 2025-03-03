import Header from "./Header";
import Footer from "./Footer";
const RefundPolicy = () => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>

        <p className="text-gray-600 mb-4">
          We value customer satisfaction and strive to ensure a seamless
          experience. This Refund Policy outlines the terms and conditions for
          refunds.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          1. Eligibility for Refunds
        </h2>
        <p className="text-gray-600 mb-4">
          Refunds are applicable only under specific circumstances, such as
          service issues, incorrect charges, or technical errors.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          2. Refund Request Process
        </h2>
        <p className="text-gray-600 mb-4">
          To request a refund, please contact our support team within 7 days of
          purchase with proof of payment and a detailed explanation of the
          issue.
        </p>

        <h2 className="text-2xl font-semibold mt-4">3. Non-Refundable Items</h2>
        <p className="text-gray-600 mb-4">
          Certain products or services may not be eligible for refunds,
          including digital goods, promotional items, and subscription-based
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-4">4. Processing Refunds</h2>
        <p className="text-gray-600 mb-4">
          Approved refunds will be processed within 5-10 business days. Refunds
          will be credited to the original payment method.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          5. Changes to Refund Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update this Refund Policy at any time.
          Continued use of our services implies acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-4">6. Contact Us</h2>
        <p className="text-gray-600">
          For any refund-related inquiries, please contact us at
          support@example.com.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
