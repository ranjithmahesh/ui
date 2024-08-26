import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Body() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" container">
      <div className="m-5 w-100">
        <NavBar />
        <div className="mt-3">
          <h2
            style={{ backgroundColor: "#420394" }}
            className="py-4 text-center text-white"
          >
            Refund Policy
          </h2>
          <p className="mt-5 fw-medium">
            <strong>Effective as of August 20, 2024</strong>
          </p>
          <p className="fw-medium">
            Refunds are valid within 2 hours after the time of purchase and only
            apply to the first payment received for the product, provided the
            consumer has not made more than 10 API calls. If, for any reason,
            the payment for the subscription is doubled, only requests for a
            refund of the doubled payment will be accepted within 72 hours after
            the payment is confirmed. Refund requests for duplicate payments
            made in months earlier than the current month will not be accepted.
            If a customer cancels their paid subscription on the website and,
            for any reason, the subscription cannot be canceled automatically in
            their Stripe account, claims will only be accepted within 72 hours
            of the cancellation made on the website. After this period, claims
            for refunds will not be accepted.
          </p>
          <p className="fw-medium">
            In the event that a customer subscribes to a Free Trial for a
            specific period but fails to unsubscribe before the trial period
            ends, we regret to inform you that refund requests will not be
            accepted under any circumstances. If we determine that you are
            eligible for a refund, we will refund the full purchase price of
            your subscription. Please note that any third-party fees associated
            with your purchase, such as credit card processing fees, may not be
            refunded. Refunds will be processed within 14 business days of our
            approval.
          </p>
          <p className="fw-medium">
            Our refund policy only applies to new customers who have purchased a
            subscription to our product. If you have previously received a
            refund for our product, you will not be eligible for another refund.
            Please understand that our refund policy is final, and we reserve
            the right to modify it at any time without notice.
          </p>
          <p className="fw-medium">
            To request a refund, the customer can send an email to us at{" "}
            <a
              href="mailto:sales@chargebackzero.com"
              className="text-decoration-none"
            >
              sales@chargebackzero.com
            </a>{" "}
            with their purchase information and explain why. The Customer
            Service team will analyze the claim and return a response. In the
            event that the refund request is accepted, we will issue refunds to
            the original payment method used to make the purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

const RefundPolicy = () => {
  return (
    <>
      <Body />
      <Footer />
    </>
  );
};

export default RefundPolicy;
